import { vitePlugin as remix } from "@remix-run/dev"
import { vercelPreset } from "@vercel/remix/vite"
import { defineConfig } from "vite"
import { fileURLToPath } from "node:url"

const appDirectory = fileURLToPath(new URL("./app", import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      "~": appDirectory
    }
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: false,
        v3_lazyRouteDiscovery: false,
        v3_relativeSplatPath: true,
        v3_singleFetch: false,
        v3_throwAbortReason: false
      },
      ignoredRouteFiles: [".*"],
      serverDependenciesToBundle: ["postgres"],
      presets: [vercelPreset()]
    })
  ]
})
