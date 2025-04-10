import { Section } from '@/components/layouts/section'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export const Contact = () => {
  return (
    <Section className="min-h-screen" id="contact">
      <Section.Container className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-1">
          <Mail />
          <span>falaaimatheus.dev@gmail.com</span>
        </div>
        <div className="flex items-center gap-1 text-blue-600">
          <Link
            href="https://www.linkedin.com/in/matheussfranca/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </div>
      </Section.Container>
    </Section>
  )
}
