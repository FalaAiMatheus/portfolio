import { Section } from '@/components/layouts/section'

export const SectionLinks = ({ children }: React.PropsWithChildren) => {
  return (
    <Section>
      <Section.Container className="flex-col items-start gap-2 self-start">
        {children}
      </Section.Container>
    </Section>
  )
}
