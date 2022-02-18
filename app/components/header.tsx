import HeadroomPrimitive from "react-headroom"
import { styled } from "~/styles"

const Headroom = styled(HeadroomPrimitive, {
  ["> .headroom"]: {
    left: "0",
    right: "0",
    top: "0",
    zIndex: "2",

    ["&.headroom--scrolled"]: {
      transition: "transform 0.5s ease-in-out, background 0.5s ease-in-out"
    },

    ["&.headroom--unfixed"]: {
      position: "relative",
      transform: "translateY(0)"
    },

    ["&.headroom--pinned"]: {
      position: "fixed",
      transform: "translateY(0%)"
    },

    ["&.headroom--unpinned"]: {
      position: "fixed",
      transform: "translateY(-100%)"
    }
  }
})

const StyledHeader = styled("header", {
  background: "$slate4",
  color: "$slate12",
  padding: "1rem"
})

export function Header() {
  return (
    <Headroom disableInlineStyles={true}>
      <StyledHeader>
        Header
      </StyledHeader>
    </Headroom>
  )
}
