import { MainLayout } from "~/layouts/main"
import { Hero } from "~/components/hero"
import { PageHeading } from "~/components/page-heading"
import { PageContent } from "~/components/page-content"
import { MapLink } from "~/components/map-link"
import { LiabilityWaiverLink } from "~/components/liability-waiver-link"
import { LinkButton } from "~/components/button"
import { pages, square, external } from "~/urls"
import { windowTitle } from "~/util"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes } from "~/styles"

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

const RegisterButton = styled(LinkButton, {
	alignItems: "center",
	background: "$themePrimary",
	color: "$white",
	cursor: "pointer",
	display: "flex",
	fontSize: "1.5rem",
	fontStyle: "italic",
	fontWeight: "600",
	justifyContent: "center",
	margin: "2rem",
	padding: "0.25rem 3.5rem",
	textAlign: "center",
	textTransform: "uppercase",
	zIndex: "3",

	"@s": {
		fontSize: "2rem",
		padding: "0.5rem 2.5rem",
	}
})

const List = styled("ul", {
	marginLeft: "1.5rem"
})

const QuarryRockCallout = styled("div", {
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",

	"@s": {
		flexDirection: "row",
		gap: "2rem",
	}
})

const QuarryRockLogo = styled("img", {
	borderRadius: "1rem",
	height: "14.0625rem",
	width: "14.0625rem",
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

const quarryRockAddress = {
	line1: "6401 Dalton Pike SE",
	city: "Cleveland",
	state: "TN",
	postalCode: "37323",
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
					<SubHeading>April 6<sup>th</sup> & 7<sup>th</sup>, 2024</SubHeading>
					<RegisterButton ghost={false} href="#registration-options">Click Here To Sign Up</RegisterButton>
				</HeroContent>
			</HeroWrapper>
			<PageContent>
				<p>This challenge is a partnership between The Harvest Archery Pro Shop and <a href="https://www.facebook.com/QuarryRock" target="_blank">Quarry Rock Archery Club</a>.</p>
				<QuarryRockCallout>
					<div>
						<a href="https://www.facebook.com/QuarryRock" target="_blank">
							<QuarryRockLogo
								height="200"
								width="200"
								src="/images/quarry-rock-archery-club-logo-320.jpg"
								alt="Quarry Rock Archery Club Logo" />
						</a>
					</div>
					<div>
						<MapLink address={quarryRockAddress}>
							<div>{quarryRockAddress.line1}</div>
							<div>{quarryRockAddress.city}, {quarryRockAddress.state} {quarryRockAddress.postalCode}</div>
						</MapLink>
					</div>
				</QuarryRockCallout>
				<p>Put your archery skills to the test at long ranges, steep angles and tight windows. Join us for a weekend of fun, fellowship and challenging archery shots. This shoot is a great opportunity to get yourself prepared for the upcoming Total Archery Challenge and other spring/summer 3D archery events.</p>
				<p>Quarry Rock will offer <strong>two different courses of 15 or 20 targets each</strong>, with a practice range at the facility for warm up. There will also be novelty shots and games for prizes available as well. Choose your event option below to register.</p>
				<p>If you'd like to make a weekend of it, camping will be available on-site, free of charge. We only ask that you be responsible and respectful of the facility. Concessions will be available for purchase at the event. Children are welcome, but must be accompanied by an adult at all times, both on and off the range, no exceptions.</p>
				<p>You will be required to complete our <LiabilityWaiverLink>liability waiver</LiabilityWaiverLink> before you will be allowed to participate in the event. This can be completed online, and it is preferred that this is accomplished prior to registering for the event.</p>
				<h2 id="registration-options">Register for the The Rock Archery Challenge</h2>
				<RegistrationPanel>
					<PriceOption>
						<PriceOptionHeading>One Course</PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/josh-at-full-draw.webp)" }} />
						<PriceOptionDescription>
							You choose, one of two available courses. 15 - 20 targets. One to two miles hiking.
						</PriceOptionDescription>
						<PriceOptionLink ghost={false} href="/r/trac-one-course" target="_blank">$30.00</PriceOptionLink>
					</PriceOption>
					<PriceOption>
						<PriceOptionHeading>Both Courses</PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/bailey-at-full-draw.webp)" }} />
						<PriceOptionDescription>
							You get to shoot both available courses. Over 30 targets. Two to three miles hiking.
						</PriceOptionDescription>
						<PriceOptionLink ghost={false} href="/r/trac-both-courses" target="_blank">$50.00</PriceOptionLink>
					</PriceOption>
					<PriceOption>
						<PriceOptionHeading><span>One Day,</span><span>Unlimited Shoot</span></PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/doc-at-full-draw.webp)" }} />
						<PriceOptionDescription>
							Shoot either course as many times as you'd like in one day. This is our <strong>recommended</strong> option.
						</PriceOptionDescription>
					<PriceOptionLink ghost={false} href="/r/trac-one-day-unlimited" target="_blank">$60.00</PriceOptionLink>
					</PriceOption>
					<PriceOption>
						<PriceOptionHeading><span>All Weekend,</span><span>Unlimited Shoot</span></PriceOptionHeading>
						<PriceOptionImage style={{ backgroundImage: "url(/images/quarry-rock-practice-range.webp)" }} />
						<PriceOptionDescription>
							Camp overnight. Hang out. Meet new people. Shoot all you want. Get the most out of the event.
						</PriceOptionDescription>
						<PriceOptionLink ghost={false} href="/r/trac-weekend-unlimited" target="_blank">$100.00</PriceOptionLink>
					</PriceOption>
				</RegistrationPanel>
				<AdditionalInfo>
					All prices are per person. Change quantity at checkout when paying for more than one person. Local sales tax may apply. Please remember to complete our <LiabilityWaiverLink>liability waiver</LiabilityWaiverLink>, as it will be required in order to participate in the event.
				</AdditionalInfo>
			</PageContent>
		</MainLayout>
	)
}
