import { site } from "~/data"
import { external } from "~/urls"

export function MapLink({ address = site.address, children, ...props }) {
	return (
		<a href={external.mapUrl(address)} {...props} target="_blank" rel="nofollow">
			{children}
		</a>
	)
}
