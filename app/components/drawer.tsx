// Adapted from:
// https://letsbuildui.dev/articles/building-a-drawer-component-with-react-portals
import { useRef, useEffect, Node } from "react"
import * as Portal from "@radix-ui/react-portal"
import { NoSsr } from "~/components/no-ssr"
import { styled } from "~/styles"

const Container = styled("div", {
  smoothTransition: "all",
})

const Contents = styled("div", {
  background: "$white",
  height: "100%",
  minHeight: "100vh",
  overflow: "auto",
  position: "fixed",
  smoothTransition: "all",
  top: "0",
  width: "100%",
  zIndex: "1000",

  ["@s"]: {
    width: "16rem"
  },

  variants: {
    open: {
      true: {
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.5)",
      }
    },

    position: {
      left: {
        left: "0",
        transform: "translateX(-100%)"
      },

      right: {
        right: "0",
        transform: "translateX(100%)"
      }
    }
  },

  compoundVariants: [
    {
      position: "left",
      open: true,
      css: {
        transform: "none"
      }
    },

    {
      position: "right",
      open: true,
      css: {
        transform: "none"
      }
    }
  ]
})

const Backdrop = styled("div", {
  background: "rgba(0, 0, 0, 0.5)",
  height: "100%",
  left: "0",
  opacity: "0",
  pointerEvents: "none",
  position: "fixed",
  smoothTransition: "all",
  top: "0",
  visibility: "hidden",
  width: "100%",
  zIndex: "0",

  variants: {
    open: {
      true: {
        opacity: "1",
        pointerEvents: "auto",
        visibility: "visible",
        zIndex: "999",
      }
    }
  }
})

type Position = "right" | "left"
type DrawerProps = {
  isOpen!: boolean,
  onClose: Function,
  position: Position,
  children: Node,
  defaultValue?: string
}

export function Drawer({
  isOpen = false,
  onClose,
  position = "right",
  children,
  ...props
}: DrawerProps) {
  const mounted = useRef(false)
  const documentBody = useRef((typeof window !== "undefined") ? window.document.querySelector("body") : null)

  useEffect(() => {
    mounted.current = true

    return () => mounted.current = false
  }, [])

  useEffect(() => {
    if (mounted.current) {
      const updatePageScroll = () => {
        documentBody.current.style.overflow = isOpen ? "hidden" : ""
      }

      updatePageScroll()
    }
  }, [isOpen])

  return (
    <NoSsr>
      <Portal.Root>
        <Container
          open={isOpen}
          aria-hidden={isOpen ? "false" : "true"}>
          <Contents
            position={position}
            open={isOpen}
            role="dialog"
            {...props}>
            {children}
          </Contents>
          <Backdrop
            open={isOpen}
            onClick={onClose} />
        </Container>
      </Portal.Root>
    </NoSsr>
  )
}
