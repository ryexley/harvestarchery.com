import { Link } from "@remix-run/react"
import { ImageBox } from "~/components/image-box"
import { ArrowRight } from "~/components/icons"
import { IMAGE_TYPE } from "~/util/images"
import { pages } from "~/urls"
import { styled, breakpointPx as sizes } from "~/styles"

const NewsAndUpdatesSection = styled("section", {
	borderBottom: "0.3125rem solid $slate11",
	borderTop: "0.3125rem solid $slate11",
	padding: "1rem 1rem 2rem 1rem"
})

const SectionHeading = styled("h2", {
	fontSize: "2rem",
	margin: "0 0 1rem 0",
	textAlign: "center",
	textTransform: "uppercase"
})

const NewsItems = styled("div", {
	"--grid-layout-gap": "1rem",
	"--grid-column-count": "3",
	"--grid-item--min-width": "calc(23.75rem - 2rem)", // 390px - 1rem of margin/padding left and right
	"--gap-count": "calc(var(--grid-column-count) - 1)",
	"--total-gap-width": "calc(var(--gap-count) * var(--grid-layout-gap))",
	"--grid-item--max-width": "calc((100% - var(--total-gap-width)) / var(--grid-column-count))",
	display: "grid",
	gridAutoFlow: "row",
	gridGap: "var(--grid-layout-gap)",
	gridTemplateColumns: "repeat(auto-fit, minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr))",

	"@s": {
		"--grid-item--min-width": "28.125rem",
	}
})

const NewsItemArrow = styled(ArrowRight, {
	display: "none",
	fill: "$white",
	height: "5rem",
	opacity: "0",
	position: "absolute",
	right: "2rem",
	top: "1rem",
	transform: "translateX(-2.5rem)",
	transition: "all 750ms ease-in-out",

	"@sm": {
		display: "block",
	}
})

const NewsItemLink = styled(Link, {
	display: "block",
	position: "relative",
	width: "100%",

	[`&:hover ${NewsItemArrow}`]: {
		opacity: "1",
		transform: "translateX(0)"
	}
})

const NewsItem = styled(ImageBox, {
	borderRadius: "0.625rem",
	color: "$white",
	minHeight: "22rem",
	padding: "2rem",
	transition: "all 250ms ease-in-out",

	"@s": {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
		justifyContent: "end",
		minHeight: "20rem",
	},

	h3: {
		fontSize: "1.75rem",
		marginBottom: "1rem",

		"@s": {
			marginBottom: "0"
		}
	},

	p: {
		fontWeight: "300",
		marginBottom: "2rem",

		"@s": {
			marginBottom: "0",
		}
	}
})

const tracItemImageConfig = {
	dark: true,
	blur: true,
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

export function NewsAndUpdates() {
	return (
		<NewsAndUpdatesSection>
			<SectionHeading>
				News and Updates
			</SectionHeading>
			<NewsItems>
				{/* <NewsItemLink to={pages.events.primer} prefetch="intent" reloadDocument>
					<NewsItem {...tracItemImageConfig}>
						<h3>The Harvest Fall Primer at Quarry Rock</h3>
						<p>Coming <strong>August 2nd & 3rd</strong>, our biannual archery challenge event is back, and we're making this our biggest event yet! Come join us at Quarry Rock Archery Club and get yourself ready for the upcoming archery hunting season. Click here to get all the details and get pre-registered for the event today!</p>
						<p>Registration on-site the day of the event will be an option, but <strong><em>we strongly encourage people to pre-register</em></strong> here prior to the event. Check our social media for discount codes for early registration online. Pre-registration will help streamline the check-in process, and get you and everybody else on the range and courses faster with less waiting in line.</p>
					</NewsItem>
					<NewsItemArrow />
				</NewsItemLink> */}
				<iframe
					src="https://player.cloudinary.com/embed/?cloud_name=dsvzkslti&public_id=video%2Fpromos%2Fharvest-archery-elite-victra-collab_wgtpoz&show_jump_controls=true&title=true&poster_options[transformation][start_offset]=3"
					width="640"
					height="340"
					style={{aspectRatio: "640 / 360", margin: "0 auto"}}
					allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
					allowFullScreen
					frameBorder="0"
				></iframe>
			</NewsItems>
		</NewsAndUpdatesSection>
	)
}
