import { useState, useEffect, useRef } from "react"

export function NoSsr({
  children
}) {
  const mounted = useRef(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    mounted.current = true

    return () => (mounted.current = false)
  }, [mounted])

  useEffect(() => {
    if (mounted.current) {
      setLoaded(true)
    }
  }, [mounted])

  return loaded ? children : null
}
