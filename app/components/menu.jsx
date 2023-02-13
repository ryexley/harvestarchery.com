import { ImageBox } from "~/components/image-box"
import { Drawer } from "~/components/drawer"
import * as Sheet from "~/components/sheet"
import { CallUs } from "~/components/call-us-link"
import { CloseX, Phone, Facebook, Instagram } from "~/components/icons"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "~/components/accordion"
import { IMAGE_TYPE } from "~/util/images"
import { site, menu } from "~/data"
import { external, social } from "~/urls"
import { styled, breakpointPx as sizes } from "~/styles"

const SheetMenu = styled(Sheet.Content, {
  backgroundColor: "$blackA12",

  "@s": {
    width: "20rem",
  }
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
  ["--size"]: "1.5rem",
  background: "$gray2",
  border: "none",
  borderRadius: "50%",
  cursor: "pointer",
  margin: "$1 0",
  padding: "0.125rem",
  position: "absolute",
  smoothTransition: "all",
  height: "var(--size)",
  right: "0.8rem",
  top: "0.5rem",
  width: "var(--size)",
  zIndex: "2",

  "&:hover": {
    transform: "rotate(180deg)"
  }
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
      borderLeft: "0.25rem solid $themePrimary",
      color: "$white"
    }
  }
})

const StyledAccordion = styled(Accordion, {
  background: "transparent"
})

const AccordionPanel = styled(AccordionItem, {
  background: "transparent",
  padding: "0",
})

const PanelTrigger = styled(AccordionTrigger, {
  boxShadow: `0 0.0625rem 0 $colors$blackA6`,
  color: "$themePrimary",
  fontSize: "1.5rem",
  fontWeight: "500",
  padding: "0 1rem",
  smoothTransition: "all",
  "&[data-state='closed']": { backgroundColor: "$gray2" },
  "&[data-state='open']": { backgroundColor: "$gray2" },
  "&:hover": { backgroundColor: "$gray1", color: "$themePrimary" },
})

const PanelContent = styled(AccordionContent, {
  background: "transparent",
  color: "$white",
  paddingBottom: "1rem",
})

const ShopDetails = styled(PanelContent,  {
  padding: "1rem 1rem 8rem 1rem",

  "> div": {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  }
})

const ShopDetailsHeading = styled("h3", {
  color: "$themePrimary",
  marginTop: "1rem",

  "&:first-child": {
    marginTop: "0"
  }
})

const SocialLinks = styled("ul", {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  listStyle: "none",
  padding: "0",
})

const SocialLinkItem = styled("li")

const SocialLink = styled("a", {
  alignItems: "center",
  color: "$white",
  display: "flex",
  gap: "0.5rem",
  smoothTransition: "all",

  "svg": {
    smoothTransition: "all",
  },

  "& > *": {
    display: "block"
  },

  ["&:hover, &:focus"]: {
    color: "$themePrimary",
    textDecoration: "none",

    "svg": {
      fill: "$themePrimary",
    }
  }
})

const socialIconStyle = {
  fill: "$white",
  height: "2rem",
  width: "2rem",
}

const FacebookIcon = styled(Facebook, {
  ...socialIconStyle
})

const InstagramIcon = styled(Instagram, {
  ...socialIconStyle
})

const AddressLink = styled("a", {
  color: "$white",
  smoothTransition: "all",

  ["&:hover, &:focus"]: {
    color: "$themePrimary",
    textDecoration: "none",
  }
})

const MapLink = styled("a", {
  display: "block",
  width: "100%",
  zIndex: "1",
})

const MapImage = styled(ImageBox, {
  height: "18rem",
  width: "100%",

  "@s": {
    height: "10rem",
  }
})

const CallUsLink = styled(CallUs, {
  alignItems: "center",
  border: "1px solid $themePrimary",
  borderRadius: "0.1875rem",
  color: "$white",
  display: "flex",
  gap: "$2",
  padding: "$1 $2",
  textDecoration: "none",

  "&:hover": {
    backgroundColor: "$whiteA7",

    "> svg": {
      fill: "$themePrimary",
      transform: "rotate(-270deg)"
    }
  },
})

const phoneIconSize = "1rem"
const PhoneIcon = styled(Phone, {
  fill: "$white",
  height: phoneIconSize,
  width: phoneIconSize,
  smoothTransition: "all"
})

const StoreHoursList = styled("ul", {
  fontSize: "0.85rem",
  listStyle: "none",
  margin: "0 0 2rem 0",
  padding: "0",

  "> li": {
    borderBottom: "0.0625rem solid $blackA10",
    display: "flex",
    justifyContent: "space-between",
    padding: "0.25rem 0",

    "&:last-child": {
      borderBottom: "none"
    }
  }
})

const StoreHoursDay = styled("span", {
  color: "$whiteA10",
  textTransform: "capitalize",
})

export function SidebarMenu({
  open = false,
  toggle
}) {
  const mapProps = {
    image: "/images/shop-map",
    imgType: IMAGE_TYPE.PNG,
    light: false,
    blur: false,
    sizes: [
      sizes.xs,
      sizes.s,
      sizes.sm,
      sizes.m,
      sizes.ml,
      sizes.l,
      sizes.xl,
      sizes.xxl,
      sizes.xxxl,
    ]
  }

  const handleCloseMenu = event => {
    if (event) {
      event.preventDefault()
    }

    onClose()
  }

  return (
    <Sheet.Root
      open={open}
      onOpenChange={toggle}
      ariaLabel="Site menu">
      <SheetMenu showCloseButton={false}>
				<StyledAccordion
					type="single"
					defaultValue="menu"
					collapsible>
					<AccordionPanel value="menu">
						<PanelTrigger>Menu</PanelTrigger>
						<PanelContent>
							<MenuItems>
								{menu.map(({ url, label }) => (
									<MenuItem key={`menu-item-${label.toLowerCase()}`}>
										<a href={url}>{label}</a>
									</MenuItem>
								))}
							</MenuItems>
						</PanelContent>
					</AccordionPanel>
					<AccordionPanel value="contact">
						<PanelTrigger>Info</PanelTrigger>
						<ShopDetails>
							<ShopDetailsHeading>Call us</ShopDetailsHeading>
							<CallUsLink href={`tel:${site.phoneNumber}`}>
								<PhoneIcon />
								{site.phoneNumber}
							</CallUsLink>
							<ShopDetailsHeading>Connect with us</ShopDetailsHeading>
							<SocialLinks>
								<SocialLinkItem>
									<SocialLink href={social.facebook} target="_blank">
										<FacebookIcon /><span>Facebook</span>
									</SocialLink>
								</SocialLinkItem>
								<SocialLinkItem>
									<SocialLink href={social.instagram} target="_blank">
										<InstagramIcon /><span>Instagram</span>
									</SocialLink>
								</SocialLinkItem>
							</SocialLinks>
							<ShopDetailsHeading>Find us</ShopDetailsHeading>
							<AddressLink href={external.mapUrl(site.address)} target="_blank">
								<div>{site.address.line1}</div>
								<div>{site.address.city}, {site.address.state} {site.address.postalCode}</div>
							</AddressLink>
							<MapLink href={external.mapUrl(site.address)} target="_blank">
								<MapImage {...mapProps} />
							</MapLink>
							<ShopDetailsHeading>Store Hours</ShopDetailsHeading>
							<StoreHoursList>
								{Object.keys(site.storeHours).map(day => (
									<li key={day}><StoreHoursDay>{day}</StoreHoursDay> {site.storeHours[day]}</li>
								))}
							</StoreHoursList>
						</ShopDetails>
					</AccordionPanel>
				</StyledAccordion>
      </SheetMenu>
    </Sheet.Root>
  )
}
