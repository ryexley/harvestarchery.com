import { useEffect, useRef } from "react"
import { useIsomorphicLayoutEffect } from "./use-isomorphic-layout-effect"

export function useInterval(fn = () => {}, delay) {
  const savedFn = useRef(fn)

  useIsomorphicLayoutEffect(() => {
    savedFn.current = fn
  }, [fn])

  useEffect(() => {
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedFn.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}
