import { Header } from "~/components/header"
import { Footer } from "~/components/footer"

type MainLayoutProps = {
  children: Node
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
