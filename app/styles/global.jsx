import { globalCss } from "~/styles"

export const globalStyles = globalCss({
  ["*"]: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
		scrollBehavior: "smooth",
  },

  body: {
    ["--header-height"]: "5.625rem",
    fontFamily: "$primary",
		margin: 0,
    minWidth: "23.75rem",
		padding: 0,
  },

  a: {
		color: "$colors$themePrimary",
    smoothTransition: "all"
  },

  ["a, input, select"]: {
    border: "1px solid transparent",
    outline: "0",

    ["&:focus"]: {
      border: "1px solid transparent",
      borderRadius: "0.1875rem",
      // boxShadow: "0 0 0 0.0625rem $colors$darkBlue"
    }
  },

  button: {
    fontSize: "1rem",
    fontFamily: "$primary"
  }
})
