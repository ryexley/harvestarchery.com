import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix"
import type { LinksFunction, MetaFunction } from "remix"
import { getCssText } from "~/styles"
import { globalStyles } from "~/styles/global"

export const meta: MetaFunction = () => {
  return { title: "The Harvest Archery Pro Shop" }
}

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "true" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500;1,600;1,700&display=swap" }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <style type="text/css">{globalStyles()}</style>
        <style
          id="stitches"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}
