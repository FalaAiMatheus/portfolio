import { Header } from '~/components/header';
import { HeroSection } from '~/components/hero';

export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 overflow-hidden bg-white transition-colors duration-500 dark:bg-black">
        <div
          className="absolute top-[-10%] left-[-15%] h-[70vw] w-[70vw] animate-pulse rounded-full opacity-30 blur-[80px] md:top-[-15%] md:left-[-10%] md:h-[600px] md:w-[600px] md:blur-[120px] dark:opacity-20"
          style={{
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            animationDuration: '8s',
          }}
        />
        <Header />
        <HeroSection />
        <div
          className="absolute right-[-10%] bottom-[-5%] h-[60vw] w-[60vw] rounded-full opacity-20 blur-[60px] md:right-[-5%] md:bottom-[-10%] md:h-[500px] md:w-[500px] md:blur-[100px] dark:opacity-10"
          style={{
            background: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)',
            animationDuration: '12s',
            animationName: 'pulse',
            animationIterationCount: 'infinite',
          }}
        />{' '}
      </div>
    </main>
  );
}
