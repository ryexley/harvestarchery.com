import { useState } from "react"
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
  const location = useLocation()

  const mainContentStyle = {
    ...(offsetMainContent ? {
      marginTop: "var(--header-height)"
    } : {})
  }

  const onHeaderMenuToggle = nextOpen => setShowMenu(Boolean(nextOpen))
  const onMenuOpenChange = nextOpen => setShowMenu(Boolean(nextOpen))

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
