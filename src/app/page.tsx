import { About } from '@/components/features/about/components/about';
import { Contact } from '@/components/features/contacts/components/contact';
import { Experiences } from '@/components/features/experiences/components/experiences';
import { Projects } from '@/components/features/projects/components/projects-section';
import { WelcomePage } from '@/components/features/welcome/components/welcome-section';
import { Header } from '@/components/layouts/header';

export default function Home() {
  return (
    <main>
      <Header />
      <WelcomePage />
      <About />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}
