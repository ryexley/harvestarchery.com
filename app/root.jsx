import { useEffect, useContext } from "react"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react"
import { LinksFunction } from "@remix-run/node"
import { site } from "~/data"
import { getCssText } from "~/styles"
import { globalStyles } from "~/styles/global"
import { ClientStyleContext } from "~/styles/client.context"

const meta = () => {
  return {
    charset: "utf-8",
    title: site.title,
    viewport: "width=device-width,initial-scale=1",
    description: site.globalMetadata.join(", ")
  }
}

export const links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,500;0,600;1,300;1,400;1,500;1,600;1,700&display=swap" },
    { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏹</text></svg>" }
  ]
}

const Document = ({ children }) => {
	const clientStyleData = useContext(ClientStyleContext)

  // Only executed on client
  useEffect(() => {
    // reset cache to re-apply global styles
    clientStyleData.reset()
  }, [clientStyleData])

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <style type="text/css">{globalStyles()}</style>
        <style
					id="stitches"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  )
}

const ErrorBoundary = ({ error }) => {
  console.error("ERROR", error)

  return (
    <Document>
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
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
