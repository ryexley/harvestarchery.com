import { NoSsr } from "~/components/no-ssr"
import { withWindow } from "~/util"

export function CloudflareAnalytics() {
	return withWindow(window => {
		const analyticsEnabled = window.ENV.CF_ANALYTICS_ENABLED === "true"
		const beacon = JSON.stringify({ token: window.ENV.CF_ANALYTICS_TOKEN })

		return analyticsEnabled ? (
			<NoSsr>
				<script defer
					src="https://static.cloudflareinsights.com/beacon.min.js"
					data-cf-beacon={beacon} />
			</NoSsr>
		) : null
	})
}
