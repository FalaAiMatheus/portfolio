import { SectionLinks } from '@/features/sections-links/components/links'
import { Section } from '@/layouts/section'
import { Button } from '@/ui/button'
import { TechBadge } from '@/ui/tech-badge'
import Image from 'next/image'
import Link from 'next/link'

interface TechStackType {
  image: string
  name: string
}
export const About = () => {
  const techStack: TechStackType[] = [
    {
      image:
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg',
      name: 'NodeJs',
    },
    {
      image:
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NestJS-Dark.svg',
      name: 'NestJS',
    },
    {
      image:
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/TypeScript.svg',
      name: 'Typescript',
    },
    {
      image:
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NextJS-Dark.svg',
      name: 'NextJS',
    },
    {
      image:
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/JavaScript.svg',
      name: 'Javascript',
    },
    {
      image:
        'https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/React-Dark.svg',
      name: 'React',
    },
  ]
  return (
    <Section className="min-h-screen" id="about">
      <Section.Container className="flex-row justify-between gap-2 max-[925px]:flex-col-reverse">
        <div className="flex max-w-96 w-full flex-col items-start gap-4">
          <h1 className="text-lg font-medium lg:text-2xl xl:text-4xl">
            Matheus França
          </h1>
          <span className="text-sm text-muted-foreground">
            Full Stack Developer | Front End Developer at{' '}
            <Link
              className="transition-all hover:text-sky-700 hover:underline"
              href="https://www.opovo.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @opovoonline
            </Link>{' '}
            | Contributor on{' '}
            <Link
              className="transition-all hover:text-sky-700 hover:underline"
              href="https://www.javascript-ceara.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @javascript-ceara
            </Link>
          </span>
          <div className="flex w-full flex-col space-y-2 break-words">
            <p>
              Hi there! My name is Matheus, and I'm a software developer
              passionate about technology. I have three years of experience
              working with JavaScript, React.js, TypeScript, Next.js, and
              Node.js.
            </p>
            <p>
              I'm always learning and staying up to date with the latest trends
              and best practices in full-stack development, exploring both
              front-end and back-end to build complete solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {techStack.map((stack, stackIndex) => (
              <div className="flex items-center gap-2" key={stackIndex}>
                <TechBadge image={stack.image} name={stack.name} />
                <span>{stack.name}</span>
              </div>
            ))}
          </div>
          <SectionLinks>
            <h2 className="text-lg font-medium lg:text-xl xl:text-2xl">
              Check more
            </h2>
            <div className="flex w-full gap-2 flex-wrap">
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
          </SectionLinks>
        </div>
        <div className="relative h-[500px] w-[500px] max-[925px]:h-52 max-[925px]:w-52">
          <Image
            className="rounded-full"
            src="https://meuproximosite.nyc3.cdn.digitaloceanspaces.com/prd/minisite/fala-ai-matheus/content/Imagem%20do%20WhatsApp%20de%202024-08-22%20%C3%A0(s)%2007.56.34_db8a6396.1724418358196.content.jpg"
            fill
            alt="Photo"
          />
        </div>
      </Section.Container>
    </Section>
  )
}
