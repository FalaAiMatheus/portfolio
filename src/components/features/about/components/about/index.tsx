
import { SectionLinks } from '@/components/features/sections-links/components/links'
import { Section } from '@/components/layouts/section'
import { Button } from '@/components/ui/button'
import { TechBadge } from '@/components/ui/tech-badge'
import { techStack } from '@/core/constants/tech-stack'
import Image from 'next/image'
import Link from 'next/link'


export const About = () => {

  return (
    <Section className="min-h-screen" id="about">
      <Section.Container className="flex-row justify-between gap-2 max-[925px]:flex-col-reverse">
        <div className="flex w-full max-w-96 flex-col items-start gap-4">
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
              {`Hi there! My name is Matheus, and I'm a software developer`}
              passionate about technology. I have three years of experience
              working with JavaScript, React.js, TypeScript, Next.js, and
              Node.js.
            </p>
            <p>
              {`I'm always learning and staying up to date with the latest trends`}
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
            <div className="flex w-full flex-wrap gap-2">
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
