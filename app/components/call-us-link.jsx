import { site } from "~/data"

export function CallUs({ children, ...props }) {
	return (
		<a href={`tel:${site.phoneNumber}`} {...props}>{children}</a>
	)
}
