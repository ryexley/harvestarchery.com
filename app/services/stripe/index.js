// https://github.com/stripe/stripe-js
import StripeClient from "stripe"
import { isEmpty, isNotEmpty } from "~/util"

export function Stripe() {
	const API_KEY = process.env.STRIPE_API_KEY || ""
	const WEBHOOK_SIGNING_SECRET = process.env.STRIPE_WEBHOOK_SIGNING_SECRET || ""

	if (
		isEmpty(API_KEY) ||
		isEmpty(WEBHOOK_SIGNING_SECRET)
	) {
		throw new Error("Error initializing Stripe client: key(s) missing.")
		return
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
			throw new Error("Error initializing Stripe client", error)
		}
	}

	return {
		verifyRequestIsFromStripe: async (request = {}, requestSignature = "") => {
			try {
				const stripe = await getClient()
				const event = stripe?.webhooks?.constructEvent(
					request,
					requestSignature,
					WEBHOOK_SIGNING_SECRET,
				)

				return { event, error: null }
			} catch(error) {
				return { event: null, error }
			}
			// TODO: Verify the webhook request signature
			// Need to register the webhook handler endpoint
			// and get the signing secret from Stripe first
			// https://stripe.com/docs/webhooks/signatures
			return new Error("Not implemented")
		},

		getPaymentIntent: async (paymentIntentId) => {
			try {
				const stripe = await getClient()
				return stripe.paymentIntents.retrieve(paymentIntentId, { expand: ["customer"] })
			} catch(error) {
				throw error
			}
		}
	}
}