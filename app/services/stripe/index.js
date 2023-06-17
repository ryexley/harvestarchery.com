import StripeClient from "stripe"
import { isEmpty, isNotEmpty } from "~/util"
import { StripeError } from "~/errors/stripe-error"

/**
 * Stripe Node.js client lib
 * https://github.com/stripe/stripe-node
 */
export function Stripe() {
	const API_KEY = process.env.STRIPE_API_KEY || ""
	const WEBHOOK_SIGNING_SECRET = process.env.STRIPE_WEBHOOK_SIGNING_SECRET || ""

	if (
		isEmpty(API_KEY) ||
		isEmpty(WEBHOOK_SIGNING_SECRET)
	) {
		throw new StripeError("Error initializing Stripe client: key(s) missing.")
	}

	let __stripe = null

	const getClient = async () => {
		if (isNotEmpty(__stripe)) {
			return __stripe;
		}

		try {
			__stripe = StripeClient(API_KEY);
			return __stripe;
		} catch(error) {
			__stripe = null;
			throw new StripeError("Error initializing Stripe client", error)
		}
	}

	return {
		/**
		 * This function takes the raw http request, with the Stripe request
		 * signature from the request headers, and when paired with the
		 * WEBHOOK_SIGNING_SECRET environment variable, can verify that the
		 * event is genuinely from Stripe, extract and return the event
		 * object when it is successfully verified. When the request signature
		 * is not present, or does not pair successfully with the configured
		 * WEBHOOK_SIGNING_SECRET value, an error is returned.
		 *
		 * @param request - the http request to extract the event from
		 * @param requestSignature - the Stripe request signature, from the request headers
		 * @returns an object with either the Stripe event object, or an error
		 */
		getEvent: async (request = {}, requestSignature = "") => {
			try {
				const stripe = await getClient()
				const event = stripe?.webhooks?.constructEvent(
					request,
					requestSignature,
					WEBHOOK_SIGNING_SECRET,
				)

				return { event, error: null }
			} catch(error) {
				return { event: null, error: new StripeError(error) }
			}
		},

		getPaymentIntent: async (paymentIntentId) => {
			try {
				const stripe = await getClient()
				return stripe.paymentIntents.retrieve(paymentIntentId, { expand: ["customer"] })
			} catch(error) {
				throw new StripeError(error)
			}
		},

		getCheckoutSessionItems: async (checkoutSessionId) => {
			try {
				const stripe = await getClient()
				return stripe.checkout.sessions.listLineItems(checkoutSessionId)
			} catch(error) {
				throw new StripeError(error)
			}
		}
	}
}
