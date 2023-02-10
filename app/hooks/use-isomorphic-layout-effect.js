import { useEffect, useLayoutEffect } from "react"
import { canUseDOM } from "~/util"

export const useIsomorphicLayoutEffect =
  canUseDOM() ? useLayoutEffect : useEffect
