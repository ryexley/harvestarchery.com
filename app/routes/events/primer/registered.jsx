import { redirect } from "@remix-run/node"
import { Link } from "@remix-run/react"
import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { LiabilityWaiverLink } from "~/components/liability-waiver-link"
import { pages, resources } from "~/urls"
import { isEmpty, windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes } from "~/styles"

export const meta = () => ({
	title: windowTitle("Thank you for registering for the The Harvest Spring Primer at Quarry Rock")
})

export async function loader({ request }) {
	// return redirect(pages.home)

	const url = new URL(request.url)
	const stripeSessionId = url.searchParams.get("ssid")

	if (isEmpty(stripeSessionId)) {
		return redirect(pages.events.primer)
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
				<p>Thank you for registering for the The Harvest Spring Primer at Quarry Rock, we look forward to seeing you at the event!</p>
				<p>If you haven't already done so, please remember to fill out the <LiabilityWaiverLink>Harvest Archery liability waiver</LiabilityWaiverLink>, as well as the <a href={resources.quarryRockLiabilityWaiver} target="_blank" rel="nofollow">Quarry Rock Archery Club liability waiver</a> (open and/or download, print and fill out a copy, and bring it with you to turn in at event check-in) as this will be required before you will be able to participate in the event.</p>
				<p>Finally, if you haven't already done so, please take some time to review <Link to={pages.events.primerFaq}>the event FAQ page</Link>, as it contains answers to many questions that most people have about the event.</p>
			</PageContent>
		</MainLayout>
	)
}
