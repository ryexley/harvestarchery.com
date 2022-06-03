import HeadroomPrimitive from "react-headroom"
import { HarvestArcheryBroadheadLogo } from "~/components/logos"
import { Menu as MenuIcon, Phone } from "~/components/icons"
import { site } from "~/data"
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
  padding: "1rem 1.5rem",
  smoothTransition: "all"
})

const Left = styled("div")
const Right = styled("div", {
  display: "flex",
  gap: "$3"
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

const Logo = styled(HarvestArcheryBroadheadLogo, {
  color: "$slate12",
  height: "3.25rem"
})

const Title = styled("span", {
  ...homeLinkTextStyles,
  fontSize: "1.5rem"
})

const SubTitle = styled("span", {
  ...homeLinkTextStyles,
  fontSize: "0.85rem"
})

const CallUsLink = styled("a", {
  alignItems: "center",
  border: "1px solid $orange9",
  borderRadius: "0.1875rem",
  color: "$white",
  display: "none",
  gap: "$2",
  padding: "0 $2",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "$whiteA7",

    "> svg": {
      fill: "$orange10",
      transform: "rotate(-270deg)"
    }
  },

  "@sm": {
    display: "flex"
  }
})

const phoneIconSize = "1rem"
const PhoneIcon = styled(Phone, {
  fill: "$white",
  height: phoneIconSize,
  width: phoneIconSize,
  smoothTransition: "all"
})

const sidebarMenuToggleSize = "2rem"

const SidebarMenuToggle = styled("button", {
  background: "transparent",
  border: "none",
  cursor: "pointer",
  height: sidebarMenuToggleSize,
  padding: "0",
  width: sidebarMenuToggleSize,
  smoothTransition: "all",

  ["> svg"]: {
    fill: "$white",
    height: sidebarMenuToggleSize,
    width: sidebarMenuToggleSize
  },
})

const headroomProps = {
  disableInlineStyles: true,
  wrapperStyle: {
    marginBottom: "calc(var(--header-height) * -1)", // header-height is defined in /app/styles/global.tsx
  }
}

export function Header({
  menuOpen = false,
  toggleMenu
}) {
  return (
    <Headroom {...headroomProps}>
      <StyledHeader>
        <Left>
          <HomeLink href="/">
            <Logo />
          </HomeLink>
        </Left>
        <Right>
          <CallUsLink href={`tel:${site.phoneNumber}`}>
            <PhoneIcon />
            {site.phoneNumber}
          </CallUsLink>
          <SidebarMenuToggle
            onClick={toggleMenu}
            aria-label="Show menu">
            <MenuIcon />
          </SidebarMenuToggle>
        </Right>
      </StyledHeader>
    </Headroom>
  )
}
