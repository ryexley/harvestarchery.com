// https://supabase.com/docs/reference/javascript
import { createClient } from "@supabase/supabase-js"
import { isEmpty, isNotEmpty } from "~/util"

export function Supabase() {
	const PROJECT_URL = process.env.SUPABASE_PROJECT_URL || ""
	const API_KEY = process.env.SUPABASE_API_KEY || ""

	if (
		isEmpty(API_KEY) ||
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

		__supabase = createClient(PROJECT_URL, API_KEY)
		return __supabase;
	}

	return {
		createEventRegistration: async (eventRegistration = {}) => {
			try {
				const supabase = await getClient()
				console.log({ eventRegistration })
			} catch(error) {
				throw error
			}
		}
	}
}
