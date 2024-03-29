import { redirect } from "@remix-run/node"
import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { LiabilityWaiverLink } from "~/components/liability-waiver-link"
import { pages, resources } from "~/urls"
import { isEmpty, windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes } from "~/styles"

export const meta = () => ({
	title: windowTitle("Thank you for registering for the The Rock Archery Challenge")
})

export async function loader({ request }) {
	const url = new URL(request.url)
	const stripeSessionId = url.searchParams.get("ssid")

	if (isEmpty(stripeSessionId)) {
		return redirect(pages.events.tennesseeTrailShoot)
	}

	return null;
}

export default function TheRockArcheryChallengeSuccessPage() {
	const heroProps = {
    dark: true,
    blur: false,
    image: "/images/waterfall-ram-target",
    imgType: IMAGE_TYPE.PNG,
    sizes: [
			sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml,
      sizes.l,
      sizes.xl,
		],
		style: {
			minHeight: "50vh"
		}
  }

	return (
		<MainLayout offsetMainContent={false}>
			<Hero imageBoxProps={heroProps} headingText="BOOM! Smoked It" scrollHint={false} />
			<PageContent>
				<h2>You're in!</h2>
				<p>Thank you for registering for the The Rock Archery Challenge, we look forward to seeing you at the event!</p>
				<p>If you haven't already done so, please remember to fill out the <LiabilityWaiverLink>Harvest Archery liability waiver</LiabilityWaiverLink>, as well as the <a href={resources.quarryRockLiabilityWaiver} target="_blank">Quarry Rock Archery Club liability waiver</a> (open and/or download, print and fill out a copy, and bring it with you to turn in at event check-in) as this will be required before you will be able to participate in the event.</p>
			</PageContent>
		</MainLayout>
	)
}
