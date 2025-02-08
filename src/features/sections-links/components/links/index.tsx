import { Section } from '@/layouts/section'
import { Button } from '@/ui/button'
import Link from 'next/link'

export const SectionLinks = () => {
  return (
    <Section>
      <Section.Container className="flex-col items-start gap-2 self-start">
        <h2 className="text-lg font-medium lg:text-xl xl:text-2xl">
          Check more
        </h2>
        <div className="flex w-full gap-2">
          <Button variant="outline" asChild>
            <Link href="#experiences">Experiences</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#contact">Contact</Link>
          </Button>
        </div>
      </Section.Container>
    </Section>
  )
}
