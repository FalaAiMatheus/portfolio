import { Section } from '@/layouts/section'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

export const WelcomePage = () => {
  return (
    <Section className="min-h-screen">
      <Section.Container className="flex flex-col items-start">
        <div className="flex flex-col items-start gap-2">
          <span className="text-lg font-medium lg:text-2xl xl:text-4xl">
            Welcome to my Portfolio
          </span>
          <span className="text-lg font-medium lg:text-2xl xl:text-4xl">
            Bem vindo(a) ao meu portfólio
          </span>
        </div>
        <Link className="absolute bottom-2 self-center" href="#about">
          <div className="flex cursor-pointer flex-col items-center gap-2 rounded-lg p-4 text-center">
            <span>Clique aqui para ver mais!</span>
            <ChevronDown size={32} />
          </div>
        </Link>
      </Section.Container>
    </Section>
  )
}
