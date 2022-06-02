import { ReactNode } from "react"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react"
import { LinksFunction, MetaFunction } from "@remix-run/node"
import { getCssText } from "~/styles"
import { globalStyles } from "~/styles/global"

const meta: MetaFunction = () => {
  return { title: "The Harvest Archery Pro Shop" }
}

export const links: LinksFunction = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500;1,600;1,700&display=swap" },
    { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏹</text></svg>" }
  ]
}

const Document = (props: { children: ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <style type="text/css">{globalStyles()}</style>
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        {props.children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

const ErrorBoundary = (props: { error: Error }) => {
  console.error("ERROR", props.error)

  return (
    <Document>
      <h1>Something went wrong</h1>
      <p>{props.error.message}</p>
    </Document>
  )
}

const App = () => {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

export default App
export { meta, ErrorBoundary }
