import { redirect } from "@remix-run/node"
import { isNotEmpty } from "~/util"

export async function loader({ params }) {
	const { key: routeKey } = params;

	const routeMap = {
		"liability-waiver": "https://app.waiverelectronic.com/render/templateByRefId/harvest-archery-liability-release",
		"trac-one-course": "https://buy.stripe.com/aEU3fi3Cj2BSf849AB",
		"trac-both-courses": "https://buy.stripe.com/9AQ5nq2yfccsgc89AC",
		"trac-one-day-unlimited": "https://buy.stripe.com/cN2g244Gn1xOf845kn",
		"trac-weekend-unlimited": "https://buy.stripe.com/dR65nq5Kr5O45xu8wA",
	}

	const url = routeMap[routeKey]

	return isNotEmpty(url) ? redirect(url) : null
}
