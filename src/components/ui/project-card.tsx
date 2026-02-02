import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { Button } from './button';
import Link from 'next/link';
import { Anchor, Github } from 'lucide-react';

export type ProjectCardProps = {
  title: string;
  description: string;
  github: string;
  site?: string;
};
export const ProjectCard = ({
  title,
  description,
  github,
  site,
}: ProjectCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center gap-2">
        <Button asChild size="sm" variant="outline">
          <div className="flex items-center gap-1">
            <Github />
            <Link href={github}>Github</Link>
          </div>
        </Button>
        {site && (
          <Button asChild size="sm" variant="outline">
            <div className="flex items-center gap-1">
              <Anchor />
              <Link href={site}>Site</Link>
            </div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
