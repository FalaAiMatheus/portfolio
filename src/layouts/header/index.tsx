import { ToggleTheme } from '@/features/theme/components/toggle-theme'
import { Section } from '../section'

export const Header = () => {
  return (
    <Section>
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
  )
}
