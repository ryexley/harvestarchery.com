import { site } from "~/data"
import { external } from "~/urls"

export function MapLink({ children, ...props }) {
	return (
		<a href={external.mapUrl(site.address)} {...props} target="_blank">
			{children}
		</a>
	)
}
