import debounce from "lodash.debounce"
import { createContext, useEffect, useState } from "react"
import { TIME } from "~/enums"
import { withWindow } from "~/util"

export const ViewportContext = createContext({})

export function ViewportProvider({ children }) {
  let currentHeight = 1024
  let currentWidth = 1280

  withWindow(window => {
    currentHeight = window.innerHeight
    currentWidth = window.innerWidth
  })

  const [height, setHeight] = useState(currentHeight)
  const [width, setWidth] = useState(currentWidth)

  useEffect(() => {
    const handleWindowResize = debounce(() => {
      setHeight(window.innerHeight)
      setWidth(window.innerWidth)
    }, TIME.QUARTER_SECOND)

    withWindow(window => window.addEventListener("resize", handleWindowResize))

    return () => {
      withWindow(window => window.removeEventListener("resize", handleWindowResize))
    }
  }, [])

  return <ViewportContext.Provider value={{ height, width }}>{children}</ViewportContext.Provider>
}
