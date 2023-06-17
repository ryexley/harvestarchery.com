import { json } from "@remix-run/node"
import { Stripe } from "~/services/stripe"
import { Supabase } from "~/services/supabase";
import { HttpStatus, EVENT_REGISTRATION_TYPE } from "~/enums"
import { logger } from "~/logging"
import { isNotEmpty } from "~/util"
import { StripeError } from "~/errors/stripe-error"

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
	"checkout.session.completed": async ({ event, stripe, supabase }) => {
		try {
			const purchaseData = event?.data?.object
			const purchasedItems = await stripe.getCheckoutSessionItems(purchaseData?.id)
			const purchasedEventDetails = purchasedItems?.data[0] || {}
			const customerEventRegistrationData = {
				event_id: 1, // The Rock Archery Challenge (Fall 2023)
				registrant_name: purchaseData?.customer_details?.name,
				registrant_email: purchaseData?.customer_details?.email,
				registration_date_time: new Date(purchaseData?.created * 1000),
				registration_type: EVENT_REGISTRATION_TYPE.ONLINE, // Indicates that this user registered online
				event_option_id: purchasedEventDetails?.price?.id,
				event_option_description: purchasedEventDetails?.price?.nickname,
				purchase_quantity: purchasedEventDetails?.quantity,
				amount_paid: (purchaseData?.amount_total / 100),
			}

			const { error, status } = await supabase.createEventRegistration(customerEventRegistrationData)

			if (isNotEmpty(error)) {
				throw error
			}

			if (!HttpStatus.isSuccessStatus(status)) {
				throw new Error(`Attempt to persist event registration returned non-success status ${status}.`)
			}
		} catch(error) {
			throw error
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
		const { event: verifiedEvent, error } = await stripe.getEvent(rawRequest, requestSignature)
		// If there's an error, then we're done here ...
		if (isNotEmpty(error)) {
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
		logger.withScope({
			tags: { caller: "Stripe webhook event handler" },
			extras: { request, event }
		}).error(new StripeError(error.message, error))

		return json({
			message: `Error handling Stripe webhook: ${error.message || "(error unknown)"}`
		}, HttpStatus.InternalServerError)
	}
}
