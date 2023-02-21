import { styled } from "~/styles"

const buttonStyles = {
	borderRadius: "0.3125rem",
	borderWidth: "0.125rem",
	display: "inline-flex",
	justifyContent: "center",
	padding: "0.5rem 1rem",
	position: "relative",
  smoothTransition: "all",
	textDecoration: "none",

  variants: {
    ghost: {
      true: {
        backgroundColor: "transparent",
        borderColor: "$white",
        color: "$white",

        "&:hover": {
          backdropFilter: "blur(0.5rem)",
          backgroundColor: "$whiteA6", // "rgba(255, 255, 255, 0.2)",
          border: "0.125rem solid $blackA1",
          boxShadow: "0 0 0.25rem 0.125rem $colors$themePrimary",
          color: "$themePrimary"
        }
      }
    },

    asLink: {
      true: {
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "0",
      }
    }
  },

  defaultVariants: {
    ghost: true
  }
}

export const Button = styled("button", {
  ...buttonStyles
})

export const LinkButton = styled("a", {
  ...buttonStyles
})
