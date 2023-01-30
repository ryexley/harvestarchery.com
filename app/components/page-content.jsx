import { styled, breaks as bp } from "~/styles"

export const PageContent = styled("section", {
	fontSize: "1.2rem",
  padding: "1rem 1rem 3rem 1rem",
  smoothTransition: "all",

  p: {
  	margin: "2rem 0",

  	"&:first-child": {
  		marginTop: "0"
  	},

  	"&:last-child": {
  		marginBottom: "0"
  	}
  },

  "@m": {
  	fontSize: "1.5rem",
  	margin: "0 auto",
  	padding: "2rem 2rem 5rem 2rem",
  	width: bp.m
  }
})
