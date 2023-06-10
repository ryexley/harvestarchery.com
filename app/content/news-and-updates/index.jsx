import { Link } from "@remix-run/react"
import { ImageBox } from "~/components/image-box"
import { ArrowRight } from "~/components/icons"
import { IMAGE_TYPE } from "~/util/images"
import { pages } from "~/urls"
import { styled } from "~/styles"

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
	fill: "$white",
	height: "5rem",
	opacity: "0",
	position: "absolute",
	right: "2rem",
	top: "1rem",
	transform: "translateX(-2.5rem)",
	transition: "all 750ms ease-in-out",
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
	image: "/images/bailey-at-full-draw",
	imgType: IMAGE_TYPE.WEBP,
	sizes: []
}

export function NewsAndUpdates() {
	return (
		<NewsAndUpdatesSection>
			<SectionHeading>
				News and Updates
			</SectionHeading>
			<NewsItems>
				<NewsItemLink to={pages.events.theRockArcheryChallenge} prefetch="intent" reloadDocument>
					<NewsItem {...tracItemImageConfig}>
						<h3>The Rock Archery Challenge is back!</h3>
						<p>Coming <strong>August 19th and 20th</strong>, the third evolution of our biannual archery challenge event is going to be the biggest and best one yet! Come join us at Quarry Rock Archery Club and get yourself ready for the upcoming hunting season. Click here to get all the details and get pre-registered for the event today!</p>
					</NewsItem>
					<NewsItemArrow />
				</NewsItemLink>
			</NewsItems>
		</NewsAndUpdatesSection>
	)
}
