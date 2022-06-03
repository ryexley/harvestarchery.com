import { ImageBox } from "~/components/image-box"
import { Facebook, Instagram } from "~/components/icons"
import { IMAGE_TYPE } from "~/util/images"
import { site, menu } from "~/data"
import { external, social } from "~/urls"
import { styled, breakpointPx as sizes } from "~/styles"

const StyledFooter = styled("footer", {
  background: "$slate4",
  color: "$slate12",
  display: "grid",
  gridAutoColumns: "minmax(0, 1fr)",
  gridGap: "1rem",
  gridTemplateAreas: `
    "siteLinks contact"
    "map map"
  `,

  "@ml": {
    gridTemplateAreas: `
      "siteLinks map contact"
    `
  }
})

const SiteLinksSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gridArea: "siteLinks",
  padding: "1rem 0 0 1rem",
})

const FooterHeading = styled("h3", {
  marginBottom: "0.5rem",
})

const SiteLinks = styled("ul", {
  display: "flex",
  flexDirection: "column",
  listStyle: "none",
  margin: "0 0 2rem 1rem",
  padding: "0",
})

const SiteLink = styled("a", {
  color: "$white",

  ["&:hover, &:focus"]: {
    color: "$themePrimary",
    textDecoration: "none",
  }
})

const SocialLinks = styled("ul", {
  display: "flex",
  gap: "1rem",
  listStyle: "none",
  margin: "0 0 2rem 1rem",
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

const MapSection = styled("div", {
  display: "flex",
  gridArea: "map",
})

const MapLink = styled("a", {
  display: "block",
  width: "100%",
  zIndex: "1",
})

const MapImage = styled(ImageBox, {
  height: "12.5rem",
  width: "100%",

  "@ml": {
    height: "20rem",
  }
})

const ContactAndStoreHoursSection = styled("div", {
  display: "flex",
  gap: "1rem",
  gridArea: "contact",
  justifyContent: "space-between",
  padding: "1rem 1rem 0 0",
})

const ContactInfo = styled("div")
const StoreHours = styled("div")

const ContactInfoHeading = styled("div", {
  fontSize: "0.85rem",
  fontWeight: "600",
})

const ContactLink = styled("a", {
  color: "$white",
  smoothTransition: "all",

  ["&:hover, &:focus"]: {
    color: "$themePrimary",
    textDecoration: "none",
  }
})

const StoreHoursList = styled("ul", {
  fontSize: "0.85rem",
  listStyle: "none",
  margin: "0 0 2rem 1rem",
  padding: "0",
})

const StoreHoursDay = styled("span", {
  color: "$whiteA10",
  textTransform: "capitalize",
})

export function Footer() {
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

  return (
    <StyledFooter>
      <SiteLinksSection>
        <FooterHeading>@harvestarchery.com</FooterHeading>
        <SiteLinks>
          {menu.map(({ url, label }) => (
            <SiteLink href={url} key={url}>{label}</SiteLink>
          ))}
        </SiteLinks>
        <FooterHeading>Let's be friends</FooterHeading>
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
      </SiteLinksSection>
      <MapSection>
        <MapLink href={external.mapUrl(site.address)} target="_blank">
          <MapImage {...mapProps} />
        </MapLink>
      </MapSection>
      <ContactAndStoreHoursSection>
        <ContactInfo>
          <FooterHeading>Contact Info</FooterHeading>
          <ContactInfoHeading>Find us at:</ContactInfoHeading>
          <ContactLink href={external.mapUrl(site.address)} target="_blank">
            <div>{site.address.line1}</div>
            <div>{site.address.city}, {site.address.state} {site.address.postalCode}</div>
          </ContactLink>
          <ContactInfoHeading>Call us at:</ContactInfoHeading>
          <ContactLink href={`tel:${site.phoneNumber}`}>{site.phoneNumber}</ContactLink>
        </ContactInfo>
        <StoreHours>
          <FooterHeading>Store Hours</FooterHeading>
          <StoreHoursList>
            {Object.keys(site.storeHours).map(day => (
              <li key={day}><StoreHoursDay>{day}</StoreHoursDay>: {site.storeHours[day]}</li>
            ))}
          </StoreHoursList>
        </StoreHours>
      </ContactAndStoreHoursSection>
    </StyledFooter>
  )
}
