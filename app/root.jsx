import { useEffect, useContext } from "react"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
	useLoaderData,
} from "@remix-run/react"
import { LinksFunction, json } from "@remix-run/node"
import { site } from "~/data"
import { renderCloudflareAnalyticsScript } from "~/vendor/clouldflare-analytics"
import { getCssText } from "~/styles"
import { globalStyles } from "~/styles/global"
import { ClientStyleContext } from "~/styles/client.context"

const isDevelopment = process.env.NODE_ENV === "development"
const isProduction = process.env.NODE_ENV === "production"

export async function loader() {
	return json({
		isDevelopment: process.env.NODE_ENV === "development" || false,
		isProduction: process.env.NODE_ENV === "production" || true,
		NODE_ENV: process.env.NODE_ENV || "production",
		CF_ANALYTICS_ENABLED: process.env.CF_ANALYTICS_ENABLED || false,
		CF_ANALYTICS_TOKEN: process.env.CF_ANALYTICS_TOKEN || null,
	})
}

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
    { rel: "icon", href: "/images/harvest-archery-logo.svg", type: "image/svg+xml" }
  ]
}

const Document = ({ children }) => {
	const {
		isDevelopment,
		isProduction,
		CF_ANALYTICS_ENABLED,
		CF_ANALYTICS_TOKEN,
	} = useLoaderData()
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
        {isDevelopment && <LiveReload />}
				{/* Cloudflare Analytics (production only) */}
				{renderCloudflareAnalyticsScript({
					enabled: CF_ANALYTICS_ENABLED,
					token: CF_ANALYTICS_TOKEN,
				})}
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
