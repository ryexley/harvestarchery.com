export const pages = {
  home: "/",
  about: "/about",
  services: "/services",
  events: "/events",
  lessons: "/lessons"
}

export const external = {
  duckDuckGoMapUrl: address => `https://duckduckgo.com/?q=${address.line1.replace(/ /g, "+")}+${address.city}+${address.state}+${address.postalCode}&ia=web&iaxm=maps`
}
