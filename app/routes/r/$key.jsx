import { redirect } from "@remix-run/node"
import { isNotEmpty } from "~/util"

export async function loader({ params }) {
	const { key: routeKey } = params;

	const routeMap = {
		"liability-waiver": "https://app.waiverelectronic.com/render/templateByRefId/harvest-archery-liability-release",
		"trac-one-course": "https://buy.stripe.com/8wM7vygp590g9NKbIN",
		"trac-both-courses": "https://buy.stripe.com/aEUbLO8WD0tK3pmeV0",
		"trac-one-day-unlimited": "https://buy.stripe.com/3csg242yfccsaRO28f",
		"trac-weekend-unlimited": "https://buy.stripe.com/9AQ9DG2yfdgwf8414c",
	}

	const url = routeMap[routeKey]

	return isNotEmpty(url) ? redirect(url) : null
}
