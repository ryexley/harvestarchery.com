// Adapted from https://codepen.io/chrissimmons/pen/GrLQWp
import { styled, keyframes } from "~/styles"

const fadeInDown = keyframes({
	"0%": {
    opacity: "0",
    transform: "translateY(-2rem)",
  },

  "100%": {
    opacity: "1",
    transform: "translateY(0)",
  }
})

const scrollHintAnimation = keyframes({
	"60%": {
    opacity: "0.5",
    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)",
  },

  "100%": {
    opacity: "0",
    "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
    transform: "translateY(14px)",
  }
})

const Hint = styled("div", {
	"--size": "4rem",
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "50%",
  bottom: "3rem",
  cursor: "pointer",
  height: "var(--size)",
  left: "calc(50% - 2rem)",
  position: "absolute",
  width: "var(--size)",
  zIndex: "9998",
})

const Mouse = styled("div", {
	cursor: "pointer",
  border: "2px solid rgba(255, 255, 255, 0.5)",
  borderRadius: "12px",
  boxSizing: "border-box",
  height: "2.25rem",
  left: "calc(50% - 0.6875rem)",
  position: "absolute",
  top: "calc(50% - 1.125rem)",
  transition: "opacity .5s ease",
  width: "1.375rem",
  zIndex: "9999",
  "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
})

const Scroll = styled("div", {
	animation: `${scrollHintAnimation} 2s linear infinite`,
  background: "white",
  borderRadius: "50%",
  left: "0.3125rem",
  height: "0.5rem",
  opacity: "0",
  pointerEvents: "none",
  position: "absolute",
  top: "0.3125rem",
  width: "0.5rem",
  zIndex: "9999",
  "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)",
})

export function ScrollHint({ ...props }) {
	return (
		<Hint role="button" {...props}>
			<Mouse>
				<Scroll />
			</Mouse>
		</Hint>
	)
}
