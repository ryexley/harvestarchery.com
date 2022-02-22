import { useState } from "react"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { SidebarMenu } from "~/components/menu"
import { external } from "~/urls"
import { site } from "~/data"

type MainLayoutProps = {
  children: Node
}

export function MainLayout({ children }: MainLayoutProps) {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = ({ forceClose = false }) => {
    setShowMenu(forceClose ? false : !showMenu)
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <SidebarMenu
        isOpen={showMenu}
        onClose={() => toggleMenu({ forceClose: true })} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
