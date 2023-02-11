import { isEmpty } from "~/util"

export function renderCloudflareAnalyticsScript({
	enabled = false,
	token,
}) {
	if (!enabled) {
		return null
	}

	if (isEmpty(token)) {
		return null
	}

	const beacon = JSON.stringify({ token })

	return (
		<script defer
			src="https://static.cloudflareinsights.com/beacon.min.js"
			data-cf-beacon={beacon} />
	)
}
