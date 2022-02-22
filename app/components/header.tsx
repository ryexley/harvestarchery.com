import HeadroomPrimitive from "react-headroom"
import { Menu as MenuIcon } from "~/components/icons"
import { styled, keyframes } from "~/styles"

const Headroom = styled(HeadroomPrimitive, {
  ["> .headroom"]: {
    backgroundColor: "transparent",
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
  minHeight: "var(--header-height)", // <-- defined in /app/styles/global.tsx
  smoothTransition: "all"
})

const HomeLink = styled("a", {
  color: "$white",
  display: "inline-flex",
  flexDirection: "column",
  margin: "1rem 1.5rem",
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

const sidebarMenuToggleSize = "2rem"
const headerRightMargin = "1.5rem"

const SidebarMenuToggle = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  height: sidebarMenuToggleSize,
  margin: `auto ${headerRightMargin}`,
  padding: "0",
  width: sidebarMenuToggleSize,
  smoothTransition: "all",

  ["> svg"]: {
    fill: "$white",
    height: sidebarMenuToggleSize,
    width: sidebarMenuToggleSize
  },
})

type HeaderProps = {
  menuOpen: boolean,
  toggleMenu: Function
}

export function Header({
  menuOpen = false,
  toggleMenu
}: HeaderProps) {
  return (
    <Headroom
      disableInlineStyles={true}
      wrapperStyle={{ marginBottom: "calc(var(--header-height) * -1)" }}> {/* <-- --header-height is defined in /app/styles/global.tsx */}
      <StyledHeader>
        <HomeLink href="/">
          <Title>Harvest Archery</Title>
          <SubTitle>Pro Shop</SubTitle>
        </HomeLink>
        <SidebarMenuToggle
          onClick={toggleMenu}
          aria-label="Show menu">
          <MenuIcon />
        </SidebarMenuToggle>
      </StyledHeader>
    </Headroom>
  )
}
