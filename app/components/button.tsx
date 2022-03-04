import { styled } from "~/styles"

const buttonStyles = {
  smoothTransition: "all",

  variants: {
    ghost: {
      true: {
        backgroundColor: "transparent",
        borderColor: "$white",
        borderRadius: "0.3125rem",
        borderWidth: "0.0625rem",
        color: "$white",
        display: "inline-flex",
        justifyContent: "center",
        padding: "0.5rem 1rem",
        textDecoration: "none",

        "&:hover": {
          backdropFilter: "blur(0.5rem)",
          background: "rgba(255, 255, 255, 0.25)"
        }
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
