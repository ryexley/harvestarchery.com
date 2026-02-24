import { useRef, useState } from "react"
import { useEffect } from "react"
import { useLocation } from "@remix-run/react"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { SidebarMenu } from "~/components/menu"
import { external } from "~/urls"
import { site } from "~/data"
import { styled } from "~/styles"

const MainContent = styled("main")

export function MainLayout({ children, offsetMainContent = true }) {
  const [showMenu, setShowMenu] = useState(false)
  const lastMenuOpenAtMs = useRef(0)
  const location = useLocation()

  const mainContentStyle = {
    ...(offsetMainContent ? {
      marginTop: "var(--header-height)"
    } : {})
  }

  const onHeaderMenuToggle = () => {
    setShowMenu(current => {
      const nextOpen = !current

      if (nextOpen) {
        lastMenuOpenAtMs.current = Date.now()
      }

      return nextOpen
    })
  }
  const onMenuOpenChange = nextOpen => {
    const normalizedNextOpen = Boolean(nextOpen)

    // Guard against immediate close events emitted in the same interaction
    // that opened the menu (observed as intermittent "menu didn't open").
    if (!normalizedNextOpen && (Date.now() - lastMenuOpenAtMs.current) < 250) {
      return
    }

    setShowMenu(normalizedNextOpen)
  }

  useEffect(() => {
    setShowMenu(false)
  }, [location.pathname])

  return (
    <>
      <Header menuOpen={showMenu} toggleMenu={onHeaderMenuToggle} />
      <SidebarMenu open={showMenu} toggle={onMenuOpenChange} />
      <MainContent css={mainContentStyle}>
        {children}
      </MainContent>
      <Footer />
    </>
  )
}
