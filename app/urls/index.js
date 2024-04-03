export const pages = {
  home: "/",
  about: "/about",
  services: "/services",
  events: {
		home: "/events",
		theRockArcheryChallenge: "/events/the-rock-archery-challenge",
		racFaq: "/events/the-rock-archery-challenge/faq"
	},
  lessons: "/lessons",
  range: "/range",
	liabilityWaiver: "/r/liability-waiver"
}

export const external = {
  duckDuckGoMapUrl: address => `https://duckduckgo.com/?q=${address.line1.replace(/ /g, "+")}+${address.city}+${address.state}+${address.postalCode}&ia=web&iaxm=maps`,
  mapUrl: address => `//maps.apple.com/?q=${address.line1.replace(/ /g, "+")}+${address.city}+${address.state}+${address.postalCode}&ia=web&iaxm=maps`,
  facebookReviews: "https://www.facebook.com/The-Harvest-Archery-Pro-Shop-560518520633267/reviews",
	liabilityWaiver: "https://app.waiverelectronic.com/render/templateByRefId/harvest-archery-liability-release",
}

export const social = {
  facebook: "https://www.facebook.com/The-Harvest-Archery-Pro-Shop-560518520633267/",
  instagram: "https://www.instagram.com/harvestarchery/",
}

export const square = {
	theRockArcheryChallenge: "https://checkout.square.site/merchant/7XA331XQSY3YS/checkout/KNWXAN2APCF24T3RQQ7HKL6G"
}

export const resources = {
	quarryRockLiabilityWaiver: "/documents/quarry-rock-liability-waiver.pdf"
}
