import { MainLayout } from "~/layouts/main"
import { ImageBox } from "~/components/image-box"
import { styled } from "~/styles"
import type { MetaFunction } from "remix"

const Hero = styled(ImageBox, {
  alignItems: "center",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  minHeight: "100vh",
  width: "100vw"
})

const Title = styled("h1", {
  fontSize: "5rem",
  fontStyle: "italic",
  fontWeight: "300",
  letterSpacing: "0.25rem",
  textTransform: "uppercase"
})

const Subtitle = styled("h2", {
  fontSize: "2.5rem",
  fontStyle: "italic",
  fontWeight: "300",
  letterSpacing: "0.25rem",
  textTransform: "uppercase"
})

export const meta: MetaFunction = () => {
  return {
    title: "The Harvest Archery Pro Shop"
  }
}

export default function Index() {
  return (
    <MainLayout>
      <Hero dark blur
        image="daniel-follow-through.jpg">
        <Title>Harvest Archery</Title>
        <Subtitle>Pro Shop</Subtitle>
      </Hero>
    </MainLayout>
  )
}