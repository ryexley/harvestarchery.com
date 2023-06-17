import { createClient } from "@supabase/supabase-js"
import { isEmpty, isNotEmpty } from "~/util"
import { SupabaseError } from "~/errors/supabase-error"

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
		throw new SupabaseError("Error initializing Supabase client: key(s) missing.")
	}

	let __supabase = null

	const getClient = async () => {
		if (isNotEmpty(__supabase)) {
			return __supabase;
		}

		__supabase = createClient(
			PROJECT_URL,
			SERVICE_ROLE_API_KEY,
			{ auth: { persistSession: false } }
		)

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
					registration_type,
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
					registration_type
				})
			} catch(error) {
				throw new SupabaseError(error)
			}
		}
	}
}
