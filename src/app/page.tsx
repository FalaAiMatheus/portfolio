import { About } from '@/features/about/components/about'
import { WelcomePage } from '@/features/welcome/components/welcome-section'
import { Header } from '@/layouts/header'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <About />
    </main>
  )
}
