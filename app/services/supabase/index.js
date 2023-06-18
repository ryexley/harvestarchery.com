import { createClient } from "@supabase/supabase-js"
import { isEmpty, isNotEmpty } from "~/util"

/**
 * Supabase JavaScript client lib
 * https://supabase.com/docs/reference/javascript
 */
export function Supabase() {
	const PROJECT_URL = process.env.SUPABASE_PROJECT_URL || ""
	const API_KEY = process.env.SUPABASE_API_KEY || ""
	const SERVICE_ROLE_API_KEY = process.env.SUPABASE_SERVICE_ROLE_API_KEY || ""

	if (
		isEmpty(API_KEY) ||
		isEmpty(SERVICE_ROLE_API_KEY) ||
		isEmpty(PROJECT_URL)
	) {
		throw new Error("Error initializing Stripe client: key(s) missing.")
		return
	}

	let __supabase = null

	const getClient = async () => {
		if (isNotEmpty(__supabase)) {
			return __supabase;
		}

		__supabase = createClient(PROJECT_URL, SERVICE_ROLE_API_KEY)
		return __supabase;
	}

	return {
		createEventRegistration: async (eventRegistration = {}) => {
			try {
				const supabase = await getClient()
				const {
					event_id,
					registrant_name,
					registrant_email,
					registration_date_time,
					event_option_id,
					event_option_description,
					purchase_quantity,
					amount_paid,
				} = eventRegistration

				return await supabase.from("event_registrations").insert({
					event_id,
					registrant_name,
					registrant_email,
					registration_date_time,
					event_option_id,
					event_option_description,
					purchase_quantity,
					amount_paid,
				})
			} catch(error) {
				throw error
			}
		}
	}
}
