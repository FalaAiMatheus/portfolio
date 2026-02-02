import { Button } from './ui/button';
import Link from 'next/link';
import { ToggleTheme } from './ui/toggle-theme';

export const Header = () => {
  return (
    <section className="m-auto flex w-screen max-w-5xl items-center justify-center">
      <header className="flex w-full items-center justify-between p-4">
        <div className="text-lg font-semibold">Fala Aí Matheus</div>
        <div className="flex items-center gap-2">
          <Button size={'lg'} asChild>
            <div>
              <Link
                href="https://github.com/FalaAiMatheus"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </div>
          </Button>
          <ToggleTheme />
        </div>
      </header>
    </section>
  );
};
