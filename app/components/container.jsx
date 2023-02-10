import { styled, breakpointPx as sizes } from "~/styles"

export const Container = styled("div", {
	margin: "0 auto",

	variants: {
		max: {
			m: {
				maxWidth: "$breaks$m"
			},

			ml: {
				maxWidth: "$breaks$ml"
			},

			l: {
				maxWidth: "$breaks$l"
			},

			xl: {
				maxWidth: "$breaks$xl"
			},
		}
	},

	defaultVariants: {
		max: "l"
	}
})
