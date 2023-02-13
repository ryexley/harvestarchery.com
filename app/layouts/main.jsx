import { useState } from "react"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { SidebarMenu } from "~/components/menu"
import { external } from "~/urls"
import { site } from "~/data"
import { styled } from "~/styles"

const MainContent = styled("main")

export function MainLayout({ children, offsetMainContent = true }) {
  const [showMenu, setShowMenu] = useState(false)

  const mainContentStyle = {
    ...(offsetMainContent ? {
      marginTop: "var(--header-height)"
    } : {})
  }

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <>
      <Header menuOpen={showMenu} toggleMenu={toggleMenu} />
      <SidebarMenu open={showMenu} toggle={toggleMenu} />
      <MainContent css={mainContentStyle}>
        {children}
      </MainContent>
      <Footer />
    </>
  )
}
