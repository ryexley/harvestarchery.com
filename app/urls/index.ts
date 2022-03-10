export const pages = {
  home: "/",
  about: "/about",
  services: "/services",
  events: "/events",
  lessons: "/lessons",
  range: "/range"
}

export const external = {
  duckDuckGoMapUrl: address => `https://duckduckgo.com/?q=${address.line1.replace(/ /g, "+")}+${address.city}+${address.state}+${address.postalCode}&ia=web&iaxm=maps`,
  facebookReviews: "https://www.facebook.com/The-Harvest-Archery-Pro-Shop-560518520633267/reviews"
}
