import { useState } from "react"
import { Header } from "~/components/header"
import { Footer } from "~/components/footer"
import { Menu } from "~/components/menu"

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
      <Menu
        isOpen={showMenu}
        onClose={() => toggleMenu({ forceClose: true })} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
