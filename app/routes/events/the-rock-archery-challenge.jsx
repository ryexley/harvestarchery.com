import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageContent } from "~/components/page-content"
import { LiabilityWaiverLink } from "~/components/liability-waiver-link"
import { LinkButton } from "~/components/button"
import { square, external } from "~/urls"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes } from "~/styles"

export const meta = () => ({
	title: windowTitle(`The Rock Archery Challenge (aka "Mini TAC")`)
})

const List = styled("ul", {
	marginLeft: "1.5rem"
})

const RegistrationPanel = styled("ul", {
	background: "#333",
	borderRadius: "1rem",
	display: "grid",
	gridGap: "1rem",
	gridTemplateColumns: "repeat(auto-fill, minmax(20rem, 1fr))",
	listStyle: "none",
	margin: "2rem 0",
	overflow: "hidden",
	padding: "1rem",
})

const PriceOption = styled("li", {
	background: "$blackA12",
	borderRadius: "0.5rem",
	display: "flex",
	flexDirection: "column",
	gap: "1rem",
	minHeight: "12rem",
	padding: "1rem",

	"> p": {
		color: "$white",
		fontSize: "1rem",
		fontWeight: "normal",
		margin: "0",
	}
})

const PriceOptionHeading = styled("div", {
	color: "$white",
	display: "inline",
	fontSize: "2rem",
	fontWeight: "400",
	margin: "0",

	"> span": {
		marginRight: "1rem",
	},

	"@media (min-width: 720px)": {
		display: "flex",
		flexDirection: "column",
	}
})

const PriceOptionImage = styled("div", {
	backgroundPosition: "center",
	backgroundSize: "cover",
	backgroundRepeat: "none",
	borderRadius: "0.5rem",
	minHeight: "10rem",
})

const PriceOptionDescription = styled("p")

const PriceOptionLink = styled(LinkButton, {
	background: "$themePrimary",
	color: "$white",
})

const AdditionalInfo = styled("p", {
	fontSize: "0.8rem"
})

export default function TheRockArcheryChallengePage() {
	const heroProps = {
    dark: true,
    blur: false,
    image: "/images/tyler-bailey-archery",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml,
      sizes.l,
      sizes.xl,
    ]
  }

  return (
    <MainLayout offsetMainContent={false}>
      <Hero imageBoxProps={heroProps} headingText="The Rock Archery Challenge" />
			<PageContent>
				<p>Also known as <em>"<strong>Mini TAC</strong>"</em>, this event is a partnership between The Harvest Archery Pro Shop and Quarry Rock Archery Range.</p>
				<p>Put your archery skills to the test at long ranges, steep angles and tight windows. Join us for a weekend of fun, fellowship and challenging archery shots. This shoot is a great way to get yourself prepared for the upcoming Total Archery Challenge.</p>
				<p>Quarry Rock will offer <strong>two different courses of 15 targets each</strong>, with a practice range at the facility for warm up. There will also be novelty shots and games for prizes available as well. Choose your event option below to register.</p>
				<p>If you'd like to make a weekend of it, camping will be available on-site, free of charge. We only ask that you be responsible and respectful of the facility. Concessions will be available for purchase at the event. Children are welcome, but must be accompanied by an adult at all times, both on and off the range, no exceptions.</p>
				<p>You will be required to complete our <LiabilityWaiverLink>liability waiver</LiabilityWaiverLink> before you will be allowed to participate in the event. This can be completed online, and it is preferred that this is accomplished prior to registering for the event.</p>
				<h2>Register for The Rock Archery Challenge</h2>
				<RegistrationPanel>
					<PriceOption>
						<PriceOptionHeading>One Course</PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/tyler-bailey-archery-640.jpg)" }} />
						<PriceOptionDescription>
							One course. 15 targets. Roughly a mile long hike.
						</PriceOptionDescription>
						<PriceOptionLink ghost={false} href="/r/trac-one-course" target="_blank">$30.00</PriceOptionLink>
					</PriceOption>
					<PriceOption>
						<PriceOptionHeading>Both Courses</PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/aaron-at-full-draw-640.jpg)" }} />
						<PriceOptionDescription>
							Both courses. 30 targets. Roughly two miles hike.
						</PriceOptionDescription>
						<PriceOptionLink ghost={false} href="/r/trac-both-courses" target="_blank">$50.00</PriceOptionLink>
					</PriceOption>
					<PriceOption>
						<PriceOptionHeading><span>One Day,</span><span>Unlimited Shoot</span></PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/mini-tac-kneeling-shot-640.jpg)" }} />
						<PriceOptionDescription>
							Shoot either course as many times as you'd like in one day. This is our <strong>recommended</strong> option.
						</PriceOptionDescription>
					<PriceOptionLink ghost={false} href="/r/trac-one-day-unlimited" target="_blank">$60.00</PriceOptionLink>
					</PriceOption>
					<PriceOption>
						<PriceOptionHeading><span>All Weekend,</span><span>Unlimited Shoot</span></PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/bailey-ben-archery-640.jpg)" }} />
						<PriceOptionDescription>
							Camp overnight. Hang out. Meet new people. Shoot all you want. Get the most out of the event.
						</PriceOptionDescription>
						<PriceOptionLink ghost={false} href="/r/trac-weekend-inlimited" target="_blank">$100.00</PriceOptionLink>
					</PriceOption>
				</RegistrationPanel>
				<AdditionalInfo>
					All prices are per person. Change quantity at checkout when paying for more than one person. Local sales tax may apply. Please remember to complete our <LiabilityWaiverLink>liability waiver</LiabilityWaiverLink>, as it will be required in order to participate in the event.
				</AdditionalInfo>
			</PageContent>
		</MainLayout>
	)
}
