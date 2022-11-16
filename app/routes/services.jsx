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
    </MainLayout>
  )
}
