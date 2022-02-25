import { useContext } from "react"
import { ViewportContext } from "~/context/viewport"

export function useViewport() {
  const { height, width } = useContext(ViewportContext)

  return { height, width }
}
