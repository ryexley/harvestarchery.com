import type { ReactNode } from "react"
import { useState } from "react"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { SidebarMenu } from "~/components/menu"
import { external } from "~/urls"
import { site } from "~/data"
import { styled } from "~/styles"

const MainContent = styled("main")

type MainLayoutProps = {
  children: ReactNode
  offsetMainContent: boolean
}

export function MainLayout({ children, offsetMainContent = true }: MainLayoutProps) {
  const [showMenu, setShowMenu] = useState(false)

  const mainContentStyle = {
    ...(offsetMainContent ? {
      marginTop: "var(--header-height)"
    } : {})
  }

  const toggleMenu = ({ forceClose = false }) => {
    setShowMenu(forceClose ? false : !showMenu)
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <SidebarMenu
        isOpen={showMenu}
        onClose={() => toggleMenu({ forceClose: true })} />
      <MainContent css={mainContentStyle}>
        {children}
      </MainContent>
      <Footer />
    </>
  )
}
