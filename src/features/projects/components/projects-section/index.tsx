import { projects } from '@/core/constants/projects'
import { SectionLinks } from '@/features/sections-links/components/links'
import { Section } from '@/layouts/section'
import { Button } from '@/ui/button'
import { Card } from '@/ui/card'
import { GithubIcon } from 'lucide-react'
import Link from 'next/link'

export const Projects = () => {
  return (
    <Section id="projects" className="min-h-screen">
      <Section.Container className="flex-col items-start gap-4">
        <h2 className="text-lg font-medium lg:text-2xl xl:text-4xl">
          Projects
        </h2>
        <div className="flex max-w-screen-xl flex-wrap items-center gap-2">
          {projects.map((project, projectIndex) => (
            <Card className="w-72 max-md:w-full" key={projectIndex}>
              <Card.Header>
                <Card.Title>{project.name}</Card.Title>
              </Card.Header>
              <Card.Footer>
                <Button variant="outline" asChild>
                  <Link
                    className="flex items-center space-x-2"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                    <span>Repositório</span>
                  </Link>
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </div>
        <SectionLinks>
          <h2 className="text-lg font-medium lg:text-xl xl:text-2xl">
            Check more
          </h2>
          <div className="flex w-full gap-2">
            <Button variant="outline" asChild>
              <Link href="#experiences">Experiences</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#about">About</Link>
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
