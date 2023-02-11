import { pages } from "~/urls"

export function LiabilityWaiverLink({ children }) {
	return (
		<a href={pages.liabilityWaiver} target="_blank">
			{children}
		</a>
	)
}
