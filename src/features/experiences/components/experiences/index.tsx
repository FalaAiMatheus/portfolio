import { dates } from '@/core/constants/job'
import { SectionLinks } from '@/features/sections-links/components/links'
import { Section } from '@/layouts/section'
import { Badge } from '@/ui/badge'
import { Button } from '@/ui/button'
import Link from 'next/link'
import { useExperience } from '../../hooks/experience'

export const Experiences = () => {
  const { calcDifferenceOfDates } = useExperience()
  const timeInFunctionFrontEnd = calcDifferenceOfDates(
    dates.INIT_FUNCTION_FRONT_END,
    dates.CURRENT_DATE
  )
  const timeInFunctionApprentice = calcDifferenceOfDates(
    dates.INIT_FUNCTION_APPRENTICE,
    dates.END_FUNCTION_APPRENTICE
  )
  const timeInTheCompany = calcDifferenceOfDates(
    dates.INIT_JOB,
    dates.CURRENT_DATE
  )

  return (
    <Section className="min-h-screen" id="experiences">
      <Section.Container className="flex-col items-start gap-4">
        <h2 className="text-lg font-medium lg:text-2xl xl:text-4xl">
          Experiences
        </h2>
        <div className="flex h-auto w-full flex-col gap-2 rounded-md border bg-secondary p-4">
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <span className="text-lg font-medium">
                Grupo de Comunicação O POVO
              </span>
              <span className="text-sm">{timeInTheCompany}</span>
              <span className="text-sm text-muted-foreground">
                Fortaleza, Ceará, Brasil
              </span>
              <span className="font-medium">Desenvolvedor Front End I</span>
            </div>
            <span className="text-sm text-muted-foreground">{`${new Date(
              dates.INIT_FUNCTION_FRONT_END
            ).toLocaleDateString('pt-BR', {
              timeZone: 'UTC',
              month: 'long',
              year: 'numeric',
            })} - o momento - ${timeInFunctionFrontEnd}`}</span>
            <span className="max-w-screen-sm text-sm">
              Criação e implementação de interfaces para website mobile e
              desktop, monitoramento e correção de eventuais bugs e falhas que
              possam ocorrer em plataformas internas.
            </span>
            <div className="flex flex-wrap gap-4">
              <Badge>NextJs</Badge>
              <Badge>Typescript</Badge>
              <Badge>Tailwind</Badge>
              <Badge>Javascript</Badge>
              <Badge>React</Badge>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
              <span className="font-medium">Aprendiz Front End</span>
            </div>
            <span className="text-sm text-muted-foreground">{`${new Date(
              dates.INIT_FUNCTION_APPRENTICE
            ).toLocaleDateString('pt-BR', {
              timeZone: 'UTC',
              month: 'long',
              year: 'numeric',
            })} - ${new Date(dates.END_FUNCTION_APPRENTICE).toLocaleDateString(
              'pt-BR',
              {
                timeZone: 'UTC',
                month: 'long',
                year: 'numeric',
              }
            )} - ${timeInFunctionApprentice}`}</span>
            <div className="flex flex-wrap gap-4">
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
              <Badge>JavaScript</Badge>
              <Badge>Bootstrap</Badge>
            </div>
          </div>
        </div>
        <SectionLinks>
          <h2 className="text-lg font-medium lg:text-xl xl:text-2xl">
            Check more
          </h2>
          <div className="flex w-full flex-wrap gap-2">
            <Button variant="outline" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#projects">Projects</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </SectionLinks>
      </Section.Container>
    </Section>
  )
}
