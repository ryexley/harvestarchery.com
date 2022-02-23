import { MainLayout } from "~/layouts/main"
import { ImageBox } from "~/components/image-box"
import { BrandRotator } from "~/components/brand-image-rotator"
import { styled } from "~/styles"
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
  display: "flex",
  minHeight: "10rem",
  padding: "1rem"
})

const PageHighlights = styled(PageSection)

const CustomerQuotes = styled(PageSection)

export const meta: MetaFunction = () => {
  return {
    title: site.title,
    description: site.globalMetadata.join(", ")
  }
}

export default function Index() {
  return (
    <MainLayout>
      <Hero dark blur
        image="daniel-follow-through.jpg">
        <Title>Harvest Archery</Title>
        <Subtitle>Pro Shop</Subtitle>
        <Blurb>
          East Tennessee's premier destination for all
          of your archery needs.
        </Blurb>
      </Hero>
      <BrandRotator>Brand Rotator</BrandRotator>
      <PageHighlights>Page Highlights</PageHighlights>
      <CustomerQuotes>Customer Quotes</CustomerQuotes>
    </MainLayout>
  )
}
