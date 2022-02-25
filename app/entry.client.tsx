import { hydrate } from "react-dom";
import { RemixBrowser } from "remix";
import { ViewportProvider } from "~/context/viewport"

hydrate(
  <ViewportProvider>
    <RemixBrowser />
  </ViewportProvider>,
  document
)
