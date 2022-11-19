import { Parallax, Background } from "react-parallax"
import { MainLayout } from "~/layouts/main"
import { ImageBox } from "~/components/image-box"
import { PageHeading } from "~/components/page-heading"
import { CallUs } from "~/components/call-us-link"
import { ScrollHint } from "~/components/scroll-hint"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes, breaks as bp } from "~/styles"

const Hero = styled(ImageBox, {
  alignItems: "center",
  backgroundPosition: "top",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginTop: "calc(var(--header-height) * -1)",
  minHeight: "100vh",
  padding: "0 3rem",
  width: "100%"
})

const Heading = styled(PageHeading, {
  marginTop: "10rem"
})

const contentStyles = {
	fontSize: "1.2rem",
  padding: "1rem 1rem 3rem 1rem",
  smoothTransition: "all",

  p: {
  	margin: "2rem 0",

  	"&:first-child": {
  		marginTop: "0"
  	},

  	"&:last-child": {
  		marginBottom: "0"
  	}
  },

  "@m": {
  	fontSize: "1.5rem",
  	margin: "0 auto",
  	padding: "2rem 2rem 5rem 2rem",
  	width: bp.m
  }
}

const PageInfo = styled("section", contentStyles)

const serviceSectionImageProps = {
  bgImage: "/images/doc-fixing-a-bow-1920.png",
	strength: 500,
}

const Service = styled("section", {})

const ServiceSectionImage = styled("div", {
	height: "50vh",
	width: "100vw",
	border: "1px solid red",
})

const serviceImageProps = {
	blur: {
		min: -5,
		max: 10,
	},
  strength: 500,
}

const ServiceImageContainer = styled("div", {
	alignItems: "flex-end",
	display: "flex",
  height: 500,
	justifyContent: "flex-end",
	minHeight: "100vh",
	padding: "1rem",

	h2: {
		color: "$white",
		fontSize: "2.5rem",
		fontStyle: "italic",
		fontWeight: "600",
		textShadow: "0.25rem 0.25rem 0.25rem $colors$blackA12",
		textTransform: "uppercase"
	}
})

// TODO: replace bgImage with the use of the bgImageSrcSet prop
// and pass in a srcset, using util/renderSrcSet instead
// https://github.com/rrutsche/react-parallax#props
const ServiceHeader = ({ imageSource, heading }) => (
  <Parallax {...serviceImageProps} bgImage={imageSource}>
    <ServiceImageContainer>
			<h2>{heading}</h2>
		</ServiceImageContainer>
  </Parallax>
)

const ServiceInfo = styled("section", {})

const ServiceHeading = styled("h2", {})

const ServiceDetail = styled("div", {
	...contentStyles,
	minHeight: "100vh",
})

// TODO: pick out appropriate images for each of these
// sections
const services = [
	{
		key: "bow-and-equipment-sales",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Bow and Equipment Sales",
		details: ["[TODO] In the market for a new bow? Need a a quiver or a new backbar? We got ya covered."]
	},
	{
		key: "bow-setup-and-tuning",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Custom Bow Setup and Tuning",
		details: ["[TODO] service description"]
	},
	{
		key: "custom-arrow-builds",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Custom Arrow Builds",
		details: ["[TODO] service description"]
	},
	{
		key: "bow-re-string",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "New Bow Strings",
		details: ["[TODO] service description"]
	},
	{
		key: "broadhead-tuning",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Broadhead Tuning",
		details: ["[TODO] service description"]
	},
	{
		key: "sight-setup",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Full Sight Setup",
		details: ["[TODO] service description"]
	},
	{
		key: "lessons-and-training",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Shooting Lessons and Training",
		details: ["[TODO] service description"]
	},
	{
		key: "indoor-range",
		image: "/images/doc-fixing-a-bow-1920.png",
		heading: "Indoor Range",
		details: ["[TODO] service description"]
	}
]

export default function Services() {
  const heroProps = {
    dark: true,
    blur: false,
    image: "/images/doc-fixing-a-bow",
    imgType: IMAGE_TYPE.PNG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml,
      sizes.l,
      sizes.xl,
      sizes.xxl,
      sizes.xxxl,
    ]
  }

  return (
    <MainLayout offsetMainContent={false}>
      <Hero {...heroProps}>
        <Heading>Services We Offer</Heading>
        <ScrollHint />
      </Hero>
			<PageInfo>
				<p>Harvest Archery is a full-service archery shop ...</p>
			</PageInfo>
			{services.map(({
				key,
				image,
				heading,
				details,
			}) => (
				<Service key={key}>
					<ServiceHeader
						imageSource={image}
						heading={heading} />
					<ServiceInfo>
						<ServiceDetail>
							{details.map((paragraph, index) => <p key={`p-${index}`}>{paragraph}</p>)}
						</ServiceDetail>
					</ServiceInfo>
				</Service>
			))}
    </MainLayout>
  )
}
