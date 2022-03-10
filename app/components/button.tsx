import { styled } from "~/styles"

const buttonStyles = {
  smoothTransition: "all",

  variants: {
    ghost: {
      true: {
        backgroundColor: "transparent",
        borderColor: "$white",
        borderRadius: "0.3125rem",
        borderWidth: "0.125rem",
        color: "$white",
        display: "inline-flex",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        position: "relative",
        textDecoration: "none",

        "&:hover": {
          backdropFilter: "blur(0.5rem)",
          backgroundColor: "$whiteA6", // "rgba(255, 255, 255, 0.2)",
          border: "0.125rem solid $blackA12",
          boxShadow: "0 0 0.25rem 0.125rem $colors$orange9",
          color: "$orange9"
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
