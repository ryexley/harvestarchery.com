import HeadroomPrimitive from "react-headroom"
import { Menu } from "~/components/icons"
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
  alignItems: "center",
  background: "$blackA10",
  backdropFilter: "blur(0.5rem)",
  color: "$slate12",
  display: "flex",
  justifyContent: "space-between",
  minHeight: "var(--header-height)",
  padding: "1rem 1.5rem",
  smoothTransition: "all"
})

const HomeLink = styled("a", {
  color: "$white",
  display: "inline-flex",
  flexDirection: "column",
  textDecoration: "none"
})

const homeLinkTextStyles = {
  display: "inline-block",
  fontStyle: "italic",
  fontWeight: "600",
  textTransform: "uppercase"
}

const Title = styled("span", {
  ...homeLinkTextStyles,
  fontSize: "1.5rem"
})

const SubTitle = styled("span", {
  ...homeLinkTextStyles,
  fontSize: "0.85rem"
})

const MenuIcon = styled(Menu, {
  ["--size"]: "2rem",
  cursor: "pointer",
  fill: "$white",
  height: "var(--size)",
  width: "var(--size)"
})

export function Header() {
  return (
    <Headroom
      disableInlineStyles={true}
      wrapperStyle={{ marginBottom: "calc(var(--header-height) * -1)" }}>
      <StyledHeader>
        <HomeLink href="/">
          <Title>Harvest Archery</Title>
          <SubTitle>Pro Shop</SubTitle>
        </HomeLink>
        <MenuIcon />
      </StyledHeader>
    </Headroom>
  )
}
