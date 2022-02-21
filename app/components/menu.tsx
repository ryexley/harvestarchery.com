import { Drawer } from "~/components/drawer"
import { CloseX } from "~/components/icons"
import { menu } from "~/data"
import { styled } from "~/styles"

const StyledMenu = styled(Drawer, {
  backgroundColor: "$blackA12"
})

const Heading = styled("h2", {
  color: "$whiteA10",
  borderBottom: "1px solid rgba(0, 0, 0, 0.25)",
  fontSize: "1.5rem",
  fontWeight: "400",
  margin: "0 0 1rem 0",
  padding: "1rem"
})

const CloseButton = styled("button", {
  ["--size"]: "1.25rem",
  background: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  height: "var(--size)",
  right: "1rem",
  top: "1rem",
  width: "var(--size)"
})

const CloseButtonIcon = styled(CloseX, {
  color: "$white"
})

const MenuItems = styled("ul", {
  listStyle: "none",
  margin: "0",
  padding: "0"
})

const MenuItem = styled("li", {
  ["> a"]: {
    alignItems: "center",
    color: "$white",
    borderLeft: "0.25rem solid transparent",
    display: "flex",
    fontSize: "1.25rem",
    gap: "1rem",
    padding: "0.5rem 0.75rem",
    textDecoration: "none",

    ["&:hover, &:focus"]: {
      background: "$whiteA4",
      borderLeft: "0.25rem solid $lime9",
      color: "$white"
    }
  }
})

type MenuProps = {
  isOpen: boolean,
  onClose: Function
}

export function Menu({
  isOpen = false,
  onClose
}: MenuProps) {
  const handleCloseMenu = event => {
    if (event) {
      event.preventDefault()
    }

    onClose()
  }

  return (
    <StyledMenu
      position="right"
      isOpen={isOpen}
      onClose={onClose}>
      <CloseButton
        aria-label="Close menu"
        onClick={handleCloseMenu}>
        <CloseButtonIcon />
      </CloseButton>
      <Heading>Menu</Heading>
      <MenuItems>
        {menu.map(({ url, label }) => (
          <MenuItem key={`menu-item-${label.toLowerCase()}`}>
            <a href={url}>{label}</a>
          </MenuItem>
        ))}
      </MenuItems>
    </StyledMenu>
  )
}
