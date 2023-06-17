import { json } from "@remix-run/node"
import { Stripe } from "~/services/stripe"
import { Supabase } from "~/services/supabase";
import { isNotEmpty } from "~/util"

const stripeEventHandlerMap = {
	"checkout.session.completed": async ({ event, stripe, supabase }) => {
		console.log("handling `checkout.session.completed`", JSON.stringify(event?.data?.object, null, 2))
		// checkout session event object data:
		const testCheckoutSessionDataForReferenceOnly = {
			"id": "cs_test_b1WUWD7msob9QCzhFTPyQVa3uaa9HvDwgnO4lUHPd9yH0Q35KSbeyX0usA",
			"object": "checkout.session",
			"after_expiration": null,
			"allow_promotion_codes": true,
			"amount_subtotal": 9999,
			"amount_total": 9999,
			"automatic_tax": {
				"enabled": true,
				"status": "complete"
			},
			"billing_address_collection": "required",
			"cancel_url": "https://stripe.com",
			"client_reference_id": null,
			"consent": null,
			"consent_collection": {
				"promotions": "none",
				"terms_of_service": "none"
			},
			"created": 1686980639,
			"currency": "usd",
			"currency_conversion": null,
			"custom_fields": [],
			"custom_text": {
				"shipping_address": null,
				"submit": null
			},
			"customer": null,
			"customer_creation": "if_required",
			"customer_details": {
				"address": {
					"city": "Knoxville",
					"country": "US",
					"line1": "2706 Berringer Station Lane",
					"line2": null,
					"postal_code": "37932",
					"state": "TN"
				},
				"email": "bob@yexley.net",
				"name": "Robert D. Yexley",
				"phone": "+18653993696",
				"tax_exempt": "none",
				"tax_ids": []
			},
			"customer_email": null,
			"expires_at": 1687067039,
			"invoice": null,
			"invoice_creation": {
				"enabled": false,
				"invoice_data": {
					"account_tax_ids": null,
					"custom_fields": null,
					"description": null,
					"footer": null,
					"metadata": {},
					"rendering_options": null
				}
			},
			"livemode": false,
			"locale": "auto",
			"metadata": {},
			"mode": "payment",
			"payment_intent": "pi_3NJrwKAeH35GIXKs1rUdIzLb",
			"payment_link": "plink_1NIBL5AeH35GIXKsJEfbfoQM",
			"payment_method_collection": "always",
			"payment_method_options": {},
			"payment_method_types": [
				"card"
			],
			"payment_status": "paid",
			"phone_number_collection": {
				"enabled": true
			},
			"recovered_from": null,
			"setup_intent": null,
			"shipping_address_collection": null,
			"shipping_cost": null,
			"shipping_details": null,
			"shipping_options": [],
			"status": "complete",
			"submit_type": "auto",
			"subscription": null,
			"success_url": "https://stripe.com",
			"total_details": {
				"amount_discount": 0,
				"amount_shipping": 0,
				"amount_tax": 0
			},
			"url": null
		}
	}
}

export async function action({ request, response }) {
	if (request.method !== "POST") {
		return json({ message: "Method not allowed"}, 405)
	}

	try {
		const stripe = new Stripe()
		const supabase = new Supabase()

		const requestSignature = request?.headers?.get("stripe-signature")
		const rawRequest = await request.text()

		const { event, error } = await stripe.verifyRequestIsFromStripe(rawRequest, requestSignature)
		if (isNotEmpty(error)) {
			console.error(error)
		}

		const handler = stripeEventHandlerMap[event?.type]
		if (isNotEmpty(handler) && typeof handler === "function") {
			await handler({ event, stripe, supabase })
		}

		return new Response(null, { status: 204 })
	} catch(error) {
		return json({
			message: `Error handling Stripe webhook: ${error.message || "(error unknown)"}`
		}, 500)
	}
}
