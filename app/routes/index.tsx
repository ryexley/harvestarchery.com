import { MainLayout } from "~/layouts/main"
import { ImageBox } from "~/components/image-box"
import { styled } from "~/styles"
import type { MetaFunction } from "remix"

const Test = styled(ImageBox, {
  minHeight: "100vh",
  width: "100vw"
})

export const meta: MetaFunction = () => {
  return {
    title: "The Harvest Archery Pro Shop"
  }
}

export default function Index() {
  return (
    <MainLayout>
      <h1>The Harvest Archery Pro Shop</h1>
      <Test
        image="daniel-follow-through.jpg" />
    </MainLayout>
  )
}
