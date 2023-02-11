import { redirect } from "@remix-run/node"
import { external } from "~/urls"

export async function loader() {
	return redirect(external.liabilityWaiver)
}
