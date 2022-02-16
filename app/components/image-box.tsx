import { styled } from "~/styles"

const Box = styled("div", {
  position: "relative"
})

const ImageContainer = styled("div", {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  bottom: 0,
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,

  ["&::after"]: {
    backdropFilter: "blur(0.5rem)",
    background: "rgba(0, 0, 0, 0.75)",
    bottom: 0,
    content: `""`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  }
})

type ImageBoxProps = {
  image: string,
  children: Node
}

export function ImageBox({
  image,
  children,
  ...props
}: ImageBoxProps) {
  const imagePath = `/images/${image}`

  return (
    <Box {...props}>
      <ImageContainer css={{ backgroundImage: `url(${imagePath})` }}>
        {children}
      </ImageContainer>
    </Box>
  )
}
