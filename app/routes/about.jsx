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

const PageContent = styled("section", {
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
})

export default function About() {
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
        <Heading>About Harvest Archery</Heading>
        <ScrollHint />
      </Hero>
      <PageContent>
        <p>
          Since it opened in 2010 in Dayton, Tennessee, the Harvest Archery Pro
          Shop has served the archery needs of East Tennessee with a welcoming
          smile and the warm, friendly service that are trademarks of the southern
          hospitality in which the proprietors are rooted.
        </p>
        <p>
        	With nearly 10 years of experience in archery equipment manufacturing,
        	Doc Crowe partnered in ownership of Harvest Archery and has been a key
        	part of the growth and success of the business over the years. Doc's
        	background in manufacturing and connections in the industry has given
        	him a breadth of knowledge and understanding of both the science <em>
        	and the art</em> of archery that's difficult to find anywhere in
        	the industry.
        </p>
        <p>
        	This knowledge and understanding is what you're getting when you bring
        	your archery questions and needs to The Harvest Archery Pro shop. Doc and
        	his friendly, professional staff bring decades of experience and a
        	home-town atmosphere to the shop every day to help you become the best
        	archer you can be.
        </p>
        <p>
        	So whether you're curious about how to get started with archery, looking
        	to get in to a new bow, or if you're an ole pro that needs a new set of strings
        	for your bow, or maybe a set of custom arrows built, come on down to the
        	shop or <CallUs>give us a call</CallUs>, we'll be able to help you out, or
        	we can put you in touch with someone who can, and send you on your way with
        	some fun shop talk.
        </p>
      </PageContent>
    </MainLayout>
  )
}
