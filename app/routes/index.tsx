import { MainLayout } from "~/layouts/main"
import { ImageBox } from "~/components/image-box"
import { BrandRotator } from "~/components/brand-image-rotator"
import { IMAGE_TYPE } from "~/util/images"
import { styled, breakpointPx as sizes } from "~/styles"
import { site } from "~/data"
import type { MetaFunction } from "remix"

const Hero = styled(ImageBox, {
  alignItems: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100%"
})

const Title = styled("h1", {
  fontSize: "3.5rem",
  fontStyle: "italic",
  fontWeight: "600",
  letterSpacing: "0.25rem",
  lineHeight: "3.5rem",
  margin: "0 2rem 1rem 2rem",
  textAlign: "center",
  textShadow: "0.25rem 0.25rem 0.25rem $colors$blackA12",
  textTransform: "uppercase",
  smoothTransition: "all",

  ["@sm"]: {
    fontSize: "5rem",
    lineHeight: "5.25rem"
  }
})

const Subtitle = styled("h2", {
  fontSize: "2.5rem",
  fontStyle: "italic",
  fontWeight: "500",
  letterSpacing: "0.25rem",
  textShadow: "0.25rem 0.25rem 0.25rem $colors$blackA12",
  textTransform: "uppercase"
})

const Blurb = styled("p", {
  lineHeight: "1.5rem",
  margin: "4rem 2rem 2rem 2rem",
  textAlign: "center"
})

const PageSection = styled("section", {
  padding: "1rem"
})

const PageLinks = styled(PageSection, {
  display: "grid",
  gridGap: "0.0625rem",
  gridTemplateAreas: `
    "about"
    "services"
    "events"
    "lessons"
  `,
  minHeight: "10rem",
  padding: "0",
  position: "relative",

  ["@m"]: {
    gridTemplateAreas: `
      "about services"
      "events lessons"
    `
  },

  ["&::after"]: {
    backgroundColor: "$slate7",
    bottom: 0,
    content: `""`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: "-3",
    smoothTransition: "all"
  }
})

const PageLinkBlock = styled(ImageBox, {
  color: "$white",
  minHeight: "20rem",
  padding: "1rem"
})

const About = styled(PageLinkBlock, {
  gridArea: "about"
})

const Services = styled(PageLinkBlock, {
  gridArea: "services"
})

const Events = styled(PageLinkBlock, {
  gridArea: "events"
})

const Lessons = styled(PageLinkBlock, {
  gridArea: "lessons"
})

const CustomerQuotes = styled(PageSection)

export const meta: MetaFunction = () => {
  return {
    title: site.title,
    description: site.globalMetadata.join(", ")
  }
}

export default function Index() {
  const heroProps = {
    dark: true,
    blur: true,
    image: "/images/daniel-follow-through",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml
    ]
  }

  const aboutLinkProps = {
    dark: true,
    // blur: true,
    image: "/images/stacks-of-arrows",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm
    ]
  }

  const servicesLinkProps = {
    dark: true,
    // blur: true,
    image: "/images/arrows-on-the-jig-wheel",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml
    ]
  }

  const eventsLinkProps = {
    dark: true,
    // blur: true,
    image: "/images/youth-shooters-on-the-range",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml
    ]
  }

  const lessonsLinkProps = {
    dark: true,
    // blur: true,
    image: "/images/youth-shooters-on-the-podium",
    imgType: IMAGE_TYPE.JPG,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml
    ]
  }

  return (
    <MainLayout>
      <Hero {...heroProps}>
        <Title>Harvest Archery</Title>
        <Subtitle>Pro Shop</Subtitle>
        <Blurb>
          East Tennessee's premier destination for all
          of your archery needs.
        </Blurb>
      </Hero>
      <BrandRotator>Brand Rotator</BrandRotator>
      <PageLinks>
        <About {...aboutLinkProps}>About</About>
        <Services {...servicesLinkProps}>Services</Services>
        <Events {...eventsLinkProps}>Events</Events>
        <Lessons {...lessonsLinkProps}>Lessons</Lessons>
      </PageLinks>
      <CustomerQuotes>Customer Quotes</CustomerQuotes>
    </MainLayout>
  )
}
