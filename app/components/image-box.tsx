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
  smoothTransition: "all",

  ["&::after"]: {
    bottom: 0,
    content: `""`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    smoothTransition: "all"
  },

  variants: {
    blur: {
      true: {
        ["&::after"]: {
          backdropFilter: "blur(0.5rem)",
        }
      }
    },

    light: {
      true: {
        ["&::after"]: {
          background: "rgba(255, 255, 255, 0.75)"
        }
      }
    },

    dark: {
      true: {
        ["&::after"]: {
          background: "rgba(0, 0, 0, 0.75)"
        }
      }
    }
  },

  compoundVariants: [
    {
      light: "true",
      blur: "true",
      css: {
        ["&::after"]: {
          background: "rgba(255, 255, 255, 0.75)",
        }
      }
    },
    {
      dark: "true",
      blur: "true",
      css: {
        ["&::after"]: {
          background: "rgba(0, 0, 0, 0.75)",
        }
      }
    }
  ],

  defaultVariants: {
    light: false,
    dark: true,
    blur: true
  }
})

type ImageBoxProps = {
  image: string,
  blur: boolean,
  light: boolean,
  dark: boolean,
  children: Node
}

export function ImageBox({
  image,
  blur,
  light,
  dark,
  children,
  ...props
}: ImageBoxProps) {
  const imagePath = `/images/${image}`

  return (
    <Box {...props}>
      <ImageContainer
        blur={blur}
        light={light}
        dark={dark}
        css={{ backgroundImage: `url(${imagePath})` }}>
        {children}
      </ImageContainer>
    </Box>
  )
}
