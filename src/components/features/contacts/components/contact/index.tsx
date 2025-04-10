import { SectionLinks } from '@/components/features/sections-links/components/links';
import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import Link from 'next/link';

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
              <Link href="#experiences">Experiences</Link>
            </Button>
          </div>
        </SectionLinks>
      </Section.Container>
    </Section>
  );
};
