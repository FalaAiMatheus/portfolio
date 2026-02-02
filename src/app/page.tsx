import { AboutMeSection } from '~/components/about-me';
import { Header } from '~/components/header';
import { HeroSection } from '~/components/hero';
import { ProjectsSection } from '~/components/projects';
import { TechStackSection } from '~/components/tech-stack';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white transition-colors duration-500 dark:bg-black">
        <div
          className="absolute top-[-10%] left-[-15%] h-[70vw] w-[70vw] animate-pulse rounded-full opacity-30 blur-[80px] md:top-[-15%] md:left-[-10%] md:h-[600px] md:w-[600px] md:blur-[120px] dark:opacity-20"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            animationDuration: '8s',
          }}
        />
        <div
          className="absolute right-[-10%] bottom-[-5%] h-[60vw] w-[60vw] rounded-full opacity-20 blur-[60px] md:right-[-5%] md:bottom-[-10%] md:h-[500px] md:w-[500px] md:blur-[100px] dark:opacity-10"
          style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
            animationDuration: '12s',
            animationName: 'pulse',
            animationIterationCount: 'infinite',
          }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-6">
        <Header />
        <HeroSection />
        <AboutMeSection />
        <TechStackSection />
        <ProjectsSection />
      </div>
    </main>
  );
}
