import { MainLayout } from "~/layouts/main"
import { ImageBox } from "~/components/image-box"
import { HarvestArcheryBroadheadLogo } from "~/components/logos"
import { BrandRotator } from "~/components/brand-image-rotator"
import { CustomerQuotes } from "~/components/customer-quotes"
import { LinkButton } from "~/components/button"
import { IMAGE_TYPE } from "~/util/images"
import { pages } from "~/urls"
import { styled, breakpointPx as sizes } from "~/styles"
import { site } from "~/data"

const Hero = styled(ImageBox, {
  alignItems: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  padding: "0 3rem",
  width: "100%"
})

const HeroLogo = styled(HarvestArcheryBroadheadLogo, {
  color: "$slate12",
  marginTop: "calc(var(--header-height) + 3rem)",
  smoothTransitions: "all",
  width: "100%",

  "@sm": {
    width: "50vw"
  }
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
  fontSize: "1.25rem",
  fontStyle: "italic",
  lineHeight: "1.75rem",
  margin: "2rem",
  textAlign: "center"
})

const PageSection = styled("section", {
  padding: "1rem"
})

const PageLinks = styled(PageSection, {
  display: "grid",
  gridGap: "0.3125rem",
  gridTemplateAreas: `
    "about"
    "services"
    "events"
    "lessons"
  `,
  minHeight: "10rem",
  padding: "0",
  position: "relative",
  zIndex: "0",

  ["@m"]: {
    gridTemplateAreas: `
      "about services"
      "events lessons"
    `
  },

  ["&::after"]: {
    backgroundColor: "$slate1",
    bottom: 0,
    content: `""`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    smoothTransition: "all",
    zIndex: "-4",
  }
})

const PageLinkBlock = styled(ImageBox, {
  alignItems: "flex-end",
  color: "$white",
  display: "flex",
  justifyContent: "flex-end",
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

const PageLink = styled(LinkButton, {
  fontSize: "1.5rem",
  fontStyle: "italic",
  minWidth: "15rem",
  textTransform: "uppercase",
})

export const meta = () => {
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
    <MainLayout offsetMainContent={false}>
      <Hero {...heroProps}>
        <HeroLogo />
        <Blurb>
          East Tennessee's premier destination for all
          of your archery needs.
        </Blurb>
      </Hero>
      <BrandRotator>Brand Rotator</BrandRotator>
      <PageLinks>
        <About {...aboutLinkProps}>
          <PageLink href={pages.about}>About Us</PageLink>
        </About>
        <Services {...servicesLinkProps}>
          <PageLink href={pages.services}>Services</PageLink>
        </Services>
        <Events {...eventsLinkProps}>
          <PageLink href={pages.events}>Events</PageLink>
        </Events>
        <Lessons {...lessonsLinkProps}>
          <PageLink href={pages.lessons}>Lessons</PageLink>
        </Lessons>
      </PageLinks>
      <CustomerQuotes />
    </MainLayout>
  )
}
