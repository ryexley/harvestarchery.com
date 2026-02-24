import { json } from "@remix-run/node"
import { Stripe, StripeErrorCode } from "~/services/stripe"
import { Supabase } from "~/services/supabase";
import { db, eq, one, schema } from "~/database/db.server"
import { HttpStatus, EVENT_REGISTRATION_TYPE } from "~/enums"
import { logger } from "~/logging"
import { isNotEmpty } from "~/util"
import { formatPhoneNumber } from "~/util/formatters"
import { DataError, StripeError } from "~/errors"

const CURRENT_EVENT = 8 // The Harvest Primer at Quarry Rock

const stripeEventHandlerMap = {
	/**
	 * Handle `checkout.session.completed` events from Stripe.
	 * https://stripe.com/docs/api/events/types#event_types-checkout.session.completed
	 * For us, right now, at Harvest Archery, these events occur
	 * when someone has successfully completed the form at a payment
	 * link created for one of our price options for our archery
	 * challenge events. For those events, we want to capture the
	 * data from that event, and save some of the details from the
	 * event registration to our event_registrations database table
	 * that will be used for the generation of reports and event
	 * check-in applications.
	 */
	"checkout.session.completed": async ({ event, stripe }) => {
		try {
			const purchaseData = event?.data?.object
			const purchasedItems = await stripe.getCheckoutSessionItems(purchaseData?.id)
			const purchasedEventDetails = purchasedItems?.data[0] || {}

			// incoming event customer data
			const eventCustomer = purchaseData?.customer_details
			// initiate a database transaction
			await db.transaction(async tx => {
				// query the database to see whether or not we already
				// have a customer record with the given email address
				let customer = await db.select().from(schema.customer).where(eq(schema.customer.email, eventCustomer?.email)).then(one)
				// if we DO have an existing customer record ...
				if (isNotEmpty(customer)) {
					console.log("FOUND EXISTING CUSTOMER IN DATABASE, UPDATING!", customer)
					// update their record using the information provided
					// on the incoming event payload
					customer = await tx.update(schema.customer)
						.set({
							name: eventCustomer?.name,
							phone: formatPhoneNumber(eventCustomer?.phone),
							addressLine1: eventCustomer?.address?.line1,
							addressLine2: eventCustomer?.address?.line2,
							city: eventCustomer?.address?.city,
							state: eventCustomer?.address?.state,
							postalCode: eventCustomer?.address?.postal_code,
							updatedAt: new Date(),
						})
						.where(eq(schema.customer.email, eventCustomer?.email))
						.returning()
						.then(one)
					console.log("UPDATED CUSTOMER", customer)
				// otherwise, if we DO NOT have an existing
				// customer record ...
				} else {
					console.log("DID **NOT** FIND A CUSTOMER IN DATABASE, INSERTING!")
					// create a new record for this customer
					customer = await tx.insert(schema.customer)
						.values({
							name: eventCustomer?.name,
							email: eventCustomer?.email,
							phone: formatPhoneNumber(eventCustomer?.phone),
							addressLine1: eventCustomer?.address?.line1,
							addressLine2: eventCustomer?.address?.line2,
							city: eventCustomer?.address?.city,
							state: eventCustomer?.address?.state,
							postalCode: eventCustomer?.address?.postal_code,
							createdAt: new Date(),
							updatedAt: new Date(),
						})
						.returning()
						.then(one)
					console.log("NEW CUSTOMER", customer)
				}
				// then, create a new event registration record for
				// this customer for the current event
				await tx.insert(schema.eventRegistration)
					.values({
						eventId: CURRENT_EVENT,
						customerId: customer?.id,
						registrationDateTime: new Date(purchaseData?.created * 1000),
						eventOptionId: purchasedEventDetails?.price?.id,
						eventOptionDescription: purchasedEventDetails?.price?.nickname,
						registrationType: EVENT_REGISTRATION_TYPE.ONLINE,
						purchaseQuantity: purchasedEventDetails?.quantity,
						amountPaid: (purchaseData?.amount_total / 100),
						onlinePaymentId: purchaseData?.payment_intent,
					})
			})
		} catch(error) {
			throw new DataError(error)
		}
	}
}

const success = () => {
	// Return a No Content (204) success response, letting Stripe know
	// that the event has been successfully handled.
	return new Response(null, { status: HttpStatus.NoContent })
}

/**
 * Stripe webhook handler API endpoint
 * https://stripe.com/docs/webhooks
 */
export async function action({ request }) {
	// we're only interested in http post requests here ...
	// if it's not a post, then return a Method Not Allowed response status
	if (request.method !== "POST") {
		return new Response(null, { status: HttpStatus.MethodNotAllowed })
	}

	let event = null
	let eventErrorCode = null

	try {
		// Initialize the client libraries that we need for this integration
		const stripe = new Stripe()
		const supabase = new Supabase()

		// Grab the Stripe signature from the request headers...
		const requestSignature = request?.headers?.get("stripe-signature")
		// Get the raw text of the incoming request ...
		const rawRequest = await request.text()

		// Use the Stripe SDK to verify the incoming request is valid and
		// is genuinely from Stripe, and then extract the event payload
			const {
				event: verifiedEvent,
				error,
				errorCode
			} = await stripe.getEvent(rawRequest, requestSignature)
			// If there's an error, then we're done here ...
			if (isNotEmpty(error)) {
				eventErrorCode = errorCode
				throw error
			}

		event = verifiedEvent

		// Use the event type from the event payload to get the handler for
		// the events that we're interested in dealing with ...
		const handler = stripeEventHandlerMap[event?.type]
		// If we have a configured handler for the incoming event type ...
		if (isNotEmpty(handler) && typeof handler === "function") {
			// ... then execute the configured event handler, passing it the
			// event payload extract from the request, and the client libraries
			// to support the integration.
			await handler({ event, stripe, supabase })

			return success()
		}

		return success()
		} catch(error) {
			const errorMessage = error?.message || "(error unknown)"
			const status = eventErrorCode === StripeErrorCode.SIGNATURE_VERIFICATION_FAILED
				? HttpStatus.BadRequest
				: HttpStatus.InternalServerError

			logger.withScope({
				tags: { caller: "Stripe webhook event handler" },
				extras: { request, event }
			}).error(new StripeError(errorMessage, error))

			return json({
				message: `Error handling Stripe webhook: ${errorMessage}`
			}, status)
		}
}
