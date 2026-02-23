import { redirect } from "@remix-run/node"
import { external } from "~/urls"
import { isNotEmpty } from "~/util"

export async function loader({ params }) {
	const { key: routeKey } = params;

	const routeMap = {
		"liability-waiver": external.liabilityWaiver,
		"liablity-waiver": external.liabilityWaiver,
		"quarry-rock-waiver": external.quarryRockWaiver,
		"primer-one-course": "https://buy.stripe.com/8wM7vygp590g9NKbIN",
		"primer-both-courses": "https://buy.stripe.com/aEUbLO8WD0tK3pmeV0",
		"primer-one-day-unlimited": "https://buy.stripe.com/3csg242yfccsaRO28f",
		"primer-weekend-unlimited": "https://buy.stripe.com/9AQ9DG2yfdgwf8414c",
	}

	const url = routeMap[routeKey]

	return isNotEmpty(url) ? redirect(url) : null
}
