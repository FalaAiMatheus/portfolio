import { About } from '@/features/about/components/about'
import { Experiences } from '@/features/experiences/components/experiences'
import { Projects } from '@/features/projects/components/projects-section'
import { WelcomePage } from '@/features/welcome/components/welcome-section'
import { Header } from '@/layouts/header'

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <About />
      <Experiences />
      <Projects />
    </main>
  )
}
