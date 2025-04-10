import { ToggleTheme } from '@/components/ui/toggle-theme';
import { Section } from '../section';

export const Header = () => {
  return (
    <Section className="fixed top-0">
      <Section.Container className="justify-end" asChild>
        <header>
          <nav>
            <ul>
              <li>
                <ToggleTheme />
              </li>
            </ul>
          </nav>
        </header>
      </Section.Container>
    </Section>
  );
};
