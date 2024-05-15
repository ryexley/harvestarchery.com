import format from "date-fns/format"
import { Container } from "~/components/container"
import { MapLink as RawMapLink } from "~/components/map-link"
import { CallUs } from "~/components/call-us-link"
import { Facebook, Instagram } from "~/components/icons"
import { site, menu } from "~/data"
import { social } from "~/urls"
import { styled } from "~/styles"

const StyledFooter = styled("footer", {
  background: "$slate4",
  color: "$slate12",
	padding: "2rem 1rem 5rem 1rem",

	a: {
		["&:hover, &:focus"]: {
			color: "$white",

			"> svg": {
				fill: "$white",
			}
		}
	}
})

const StyledContainer = styled(Container, {
  display: "grid",
  gridTemplateAreas: `
    "siteLinks"
    "contactInfo"
		"storeHours"
		"copyright"
  `,

	"@sm": {
		gridAutoColumns: "minmax(0, 1fr)",
		gridGap: "1rem",
		gridTemplateAreas: `
			"siteLinks contactInfo"
			"storeHours storeHours"
			"copyright copyright"
		`
	},

  "@ml": {
    gridTemplateAreas: `
      "siteLinks contactInfo storeHours"
    `,
  },
})

const SiteLinksSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gridArea: "siteLinks",
	justifySelf: "center",
  padding: "1rem 0 0 1rem",
	width: "16rem",

	"@sm": {
		justifySelf: "center",
		width: "auto",
	},

	"@ml": {
		justifySelf: "start",
	}
})

const FooterHeading = styled("h3", {
  marginBottom: "0.5rem",
})

const SiteLinks = styled("ul", {
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  listStyle: "none",
  margin: "0 0 1rem 0",
  padding: "0",

  "li": {
    maxWidth: "10rem",
  }
})

const SiteLink = styled("a")

const SocialLinks = styled("ul", {
  display: "flex",
	flexDirection: "column",
  gap: "0.5rem",
  listStyle: "none",
  margin: "0 0 1rem 0",
  padding: "0",
})

const SocialLinkItem = styled("li")

const SocialLink = styled("a", {
  alignItems: "center",
  display: "flex",
  gap: "0.5rem",
  smoothTransition: "all",

  "svg": {
    smoothTransition: "all",
  },

  "& > *": {
    display: "block"
  },
})

const socialIconStyle = {
  fill: "$themePrimary",
  height: "2rem",
  width: "2rem",
}

const FacebookIcon = styled(Facebook, {
  ...socialIconStyle
})

const InstagramIcon = styled(Instagram, {
  ...socialIconStyle
})

const ContactInfoSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gridArea: "contactInfo",
	justifySelf: "center",
  padding: "1rem 0 0 1rem",
	width: "16rem",

	"> a": {
		margin: "0 0 1rem 0",
	},

	"@sm": {
		width: "auto",
	}
})

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

const MapLink = styled(RawMapLink, {
	display: "flex",
	flexDirection: "column",
})

const StoreHoursSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  gridArea: "storeHours",
	justifySelf: "center",
  padding: "1rem",
	width: "16rem",

	"@ml": {
		justifySelf: "end"
	}
})

const StoreHours = styled("div")

const StoreHoursList = styled("ul", {
  fontSize: "0.85rem",
  listStyle: "none",
  margin: "0 0 2rem 0",
  padding: "0",

  "> li": {
    borderBottom: "0.0625rem solid $blackA7",
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

const CopyrightNotice = styled("p", {
	alignItems: "center",
	display: "flex",
	fontSize: "0.8rem",
	justifyContent: "center",
	margin: "1rem",
})

export function Footer() {
	const currentYear = format(Date.now(), "yyyy")

  return (
    <StyledFooter>
			<StyledContainer>
				<SiteLinksSection>
					<FooterHeading>@harvestarchery.com</FooterHeading>
					<SiteLinks>
						{menu.map(({ url, label, external = false }) => {
							return (
								<li key={url}>
									<SiteLink href={url} {
										...(
											external
												? { target: "_blank", rel: "nofollow" }
												: {}
										)
									}>{label}</SiteLink>
								</li>
							)
						})}
					</SiteLinks>
					<FooterHeading>Connect with us</FooterHeading>
					<SocialLinks>
						<SocialLinkItem>
							<SocialLink href={social.facebook} target="_blank" rel="nofollow">
								<FacebookIcon /><span>Facebook</span>
							</SocialLink>
						</SocialLinkItem>
						<SocialLinkItem>
							<SocialLink href={social.instagram} target="_blank" rel="nofollow">
								<InstagramIcon /><span>Instagram</span>
							</SocialLink>
						</SocialLinkItem>
					</SocialLinks>
				</SiteLinksSection>
				<ContactInfoSection>
					<FooterHeading>Contact Info</FooterHeading>
					<ContactInfoHeading>Call us:</ContactInfoHeading>
					<CallUs>{site.phoneNumber}</CallUs>
					<ContactInfoHeading>Find us:</ContactInfoHeading>
					<MapLink>
						<div>{site.address.line1}</div>
						<div>{site.address.city}, {site.address.state} {site.address.postalCode}</div>
					</MapLink>
				</ContactInfoSection>
				<StoreHoursSection>
					<StoreHours>
						<FooterHeading>Store Hours</FooterHeading>
						<StoreHoursList>
							{Object.keys(site.storeHours).map(day => (
								<li key={day}><StoreHoursDay>{day}</StoreHoursDay> {site.storeHours[day]}</li>
							))}
						</StoreHoursList>
					</StoreHours>
				</StoreHoursSection>
			</StyledContainer>
			<Container>
				<CopyrightNotice>All site content is copyright &copy;{currentYear} The Harvest Archery Pro Shop unless otherwise specified. All rights reserved.</CopyrightNotice>
			</Container>
    </StyledFooter>
  )
}
