import { startTransition, StrictMode, useState, useCallback } from "react"
import { hydrateRoot } from "react-dom/client"
import { RemixBrowser } from "remix"
import { ViewportProvider } from "~/context/viewport"
import { ClientStyleContext } from "~/styles/client.context"
import { getCssText } from "~/styles"

function ClientCacheProvider({ children }) {
  const [sheet, setSheet] = useState(getCssText())

  const reset = useCallback(() => {
    setSheet(getCssText());
  }, [])

  return (
    <ClientStyleContext.Provider value={{ reset, sheet }}>
      {children}
    </ClientStyleContext.Provider>
  )
}

function hydrate() {
	startTransition(() => {
		hydrateRoot(
			document,
			<StrictMode>
				<ClientCacheProvider>
					<ViewportProvider>
						<RemixBrowser />
					</ViewportProvider>
				</ClientCacheProvider>
			</StrictMode>,
		)
	})
}

if (window.requestIdleCallback) {
  window.requestIdleCallback(hydrate);
} else {
  // Safari doesn't support requestIdleCallback
  // https://caniuse.com/requestidlecallback
  window.setTimeout(hydrate, 1);
}
