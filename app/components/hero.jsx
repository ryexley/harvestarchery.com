import { ImageBox } from "~/components/image-box"
import { PageHeading } from "~/components/page-heading"
import { ScrollHint } from "~/components/scroll-hint"
import { isNotEmpty } from "~/util"
import { styled } from "~/styles"

const StyledImageBox = styled(ImageBox, {
  alignItems: "center",
  // backgroundPosition: "top",
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

export function Hero({ imageBoxProps, headingText, scrollHint = true, children }) {
	return (
		<StyledImageBox {...imageBoxProps}>
			{isNotEmpty(headingText) ? (
				<Heading>{headingText}</Heading>
			) : children}
			{scrollHint ? <ScrollHint /> : null}
		</StyledImageBox>
	)
}
