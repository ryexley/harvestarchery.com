import * as Collapsible from "@radix-ui/react-collapsible"
import { useState } from "react"
import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageHeading } from "~/components/page-heading"
import { PageContent } from "~/components/page-content"
import { LiabilityWaiverLink } from "~/components/liability-waiver-link"
import { pages, square, external, resources } from "~/urls"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, keyframes, breakpointPx as sizes } from "~/styles"

export const meta = () => ({
	title: windowTitle(`The Rock Archery Challenge - April 6th & 7th, 2024`)
})

const HeroWrapper = styled("div", {
	height: "100vh",
	position: "relative",
	zIndex: "0",
})

const HeroImage = styled("div", {
	height: "100vh",
	position: "absolute",
	width: "100%",
	zIndex: "-1",
})

const HeroContent = styled("div", {
	alignItems: "center",
	color: "$white",
	display: "flex",
	flexDirection: "column",
	height: "100vh",
	justifyContent: "center",
	position: "absolute",
	width: "100%",
	zIndex: "1",
})

const SubHeading = styled("h2", {
	fontSize: "1.75rem",
	fontStyle: "italic",
	fontWeight: "400",
	margin: "0 2rem",
	textAlign: "center",
	textShadow: "0.25rem 0.25rem 0.25rem var(--colors-blackA12)",
	textTransform: "uppercase",

	"& sup": {
		fontSize: "0.85rem",
		marginLeft: "0.125rem",
	},

	"@s": {
		fontSize: "2.5rem",
		fontWeight: "400",

		"& sup": {
			fontSize: "1.25rem"
		},
	}
})

const QuestionList = styled("div", {
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
})

const QandA = styled("div", {
	paddingBottom: "1rem",

	"&:not(:last-child)": {
		borderBottom: "0.0625rem solid $blackA4",
	},
})

const QuestionToggle = styled("button", {
	background: "transparent",
	border: "none",
	cursor: "pointer",
	display: "flex",
	fontSize: "1.5rem",
	fontWeight: "600",
	justifyContent: "start",
	padding: "0",
	margin: "0",
	textAlign: "start",
	width: "100%",

	"&:hover": {
		color: "$themePrimary"
	}
})

const slideDown = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
})

const slideUp = keyframes({
  from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
  to: { height: 0, opacity: 0 },
})

const AnswerContent = styled(Collapsible.Content, {
	fontSize: "1rem",
	margin: "1rem",

	"&[data-state='open']": {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },
  "&[data-state='closed']": {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`,
  },

	p: {
		margin: "1rem 0",
	},

	"h3 ~ p": {
		marginTop: "0",
	},

	ul: {
		margin: "0.5rem 1rem 1rem 1rem",
	},
})

const HarvestWaiverDisclaimer = styled("div", {
	borderLeft: "0.3125rem solid $themePrimary",
	fontSize: "1rem",
	margin: "0 0 1.5rem 0",
	paddingLeft: "1rem",
})

function Section({
	question,
	answers
}) {
	const [open, setOpen] = useState(false)

	return (
		<QandA>
			<Collapsible.Root
				open={open}
				onOpenChange={setOpen}>
				<Collapsible.Trigger asChild>
					<QuestionToggle type="button" onClick={() => setOpen(!open)}>
						{question}
					</QuestionToggle>
				</Collapsible.Trigger>
				<AnswerContent>{answers}</AnswerContent>
			</Collapsible.Root>
		</QandA>
	)
}

const Se = ({ children }) => {
	return (
		<strong><em>{children}</em></strong>
	)
}

export default function TheRockArcheryChallengePage() {
	const heroProps = {
    dark: true,
    blur: false,
    image: "/images/bailey-at-full-draw",
    imgType: IMAGE_TYPE.WEBP,
    sizes: []
  }

  return (
    <MainLayout offsetMainContent={false}>
			<HeroWrapper>
				<HeroImage>
					<Hero imageBoxProps={heroProps} style={{ marginTop: "auto" }} />
				</HeroImage>
				<HeroContent>
					<PageHeading>The Rock Archery Challenge</PageHeading>
					<SubHeading>Frequently Asked Questions</SubHeading>
				</HeroContent>
			</HeroWrapper>
			<PageContent>
				<p>As you might imagine, we get a lot of questions about the event. This page should hopefully answer the vast majority of the questions you have about it, both as you prepare for it, and once you arrive on-site. If it doesn't, feel free to track one of us down, call the shop or hit us up on social media with your question, and we'll get an answer for you as soon as we can.</p>
				<QuestionList>
					<Section
						question={<span>Do I <em>have to</em> pre-register online?</span>}
						answers={
							<p><Se>No</Se>, you do not have to pre-register online to be able to participate in the event. However, doing so will make the check-in process once you get on-site the day of the even much more efficient, and get you out onto the range and courses faster with less standing around in line, so <Se>we definitely recommend it</Se>.</p>
						} />
					<Section
						question={<span>Payment options</span>}
						answers={
							<>
								<p>When pre-registering online, our payment gateway accepts both credit and debit cards, as well as the <a href="https://stripe.com/payments/link" target="_blank" rel="nofollow">Link</a> checkout option.</p>
								<p>When registering on-site, we will accept cash, as well as both credit and debit cards.</p>
							</>
						} />
					<Section
						question={<span>Waivers</span>}
						answers={
							<>
								<p>Because this event is a joint event hosted as a partnership between the <Se>Harvest Archery Pro Shop</Se> and the <Se>Quarry Rock Archery Club</Se>, you will need to have filled out both of those organization's waivers in order to be able to participate in the event.</p>
								<p>The <LiabilityWaiverLink>Harvest Archery liability waiver</LiabilityWaiverLink> is available online. Once it has been filled out and submitted online, you are done. There will be no need to print out or bring a copy of it with you to the event, as it will be submitted to us automatically.</p>
								<p>The <a href={resources.quarryRockLiabilityWaiver} target="_blank">Quarry Rock Archery Club liability waiver</a> is available as a PDF document. If you're reading this before the event, we recommend that you download and print out a copy of this waiver, fill it out and bring it with you to turn in when you check-in at the event. If you're reading this on-site the day of the event, there will be hard-copies of it available for you to fill out and turn in at the event.</p>
								<HarvestWaiverDisclaimer><Se>NOTE: Even if you have filled out one or both of these waivers before, the content of each of them has been recently changed recently, and we ask that you review the changes and fill out another one.</Se> We understand this is an inconvenience, but it should only take a few minutes to review and fill out, and we appreciate your patience and cooperation.</HarvestWaiverDisclaimer>
							</>
						} />
					<Section
						question={<span>What should I bring with me?</span>}
						answers={
							<>
								<h3>The Essentials</h3>
								<ul>
									<li>Your <Se>bow</Se>.</li>
									<li>Plenty of <Se>arrows</Se>.</li>
 								</ul>
								<h3>Recommended</h3>
								<ul>
									<li>A <Se>rangefinder</Se>.</li>
									<li><Se>Binoculars</Se> can be a big help.</li>
									<li>A comfortable pair of shoes or boots (note that if it has rained recently, the trails could be muddy and wet).</li>
									<li><Se>Hydration</Se>. Water or some kind of energy drink with electrolytes is highly recommended. It is often warm and humid for the event, and we want you to stay hydrated.</li>
									<li><Se>A buddy</Se> or two to shoot with.</li>
									<li>A <Se>good attitude and a willingness to learn</Se> and get better. That's what this event is all about.</li>
								</ul>
							</>
						} />
					<Section
						question={<span>Is there camping available on-site?</span>}
						answers={
							<p>Yes. If you have selected the All Weekend shoot option and would like to stay overnight, camping on-site is welcome and free of charge. There is limited availability of electrical and water hookups if you plan to bring a camper of any sort, and there are bathrooms (with no showers) on site available for use as well. We appreciate you being respectful of the property and facility and cleaning up after yourself, and leaving it the way you found it.</p>
						} />
					<Section
						question={<span>Are there bathrooms available on-site?</span>}
						answers={
							<p>Yes, there are bathrooms available for participant use on-site.</p>
						} />
					<Section
						question={<span>Merchandise and Pricing</span>}
						answers={
							<>
								<p>There will be limited supply of both Harvest Archery and Quarry Rock merchandise (hats, t-shirts, stickers, etc) available for purchase at the event.</p>
								<ul>
									<li>Hats: $30.00</li>
									<li>T-shirts: $30.00</li>
									<li>Stickers: ...</li>
								</ul>
							</>
						} />
					<Section
						question={<span>Novelty Shoots</span>}
						answers={
							<p>TODO: need information about what novelty shoots will be available, what they will cost, and what the rules are.</p>
						} />
					<Section
						question={<span>Course Details and Descriptions</span>}
						answers={
							<>
								<h3>The BearLevel Course</h3>
								<p>The BearLevel Course ...</p>
								<h3>The Cutler Range</h3>
								<p>Named after Doc's new baby boy (congrats Doc and Lo!!), the Cutler Range ...</p>
							</>
						} />
				</QuestionList>
			</PageContent>
		</MainLayout>
	)
}
