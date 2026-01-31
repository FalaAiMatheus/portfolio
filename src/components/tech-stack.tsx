import { TechStackCard } from './ui/tech-stack-card';

export type Technologies = {
  id: string;
  name: string;
};
export const TechStackSection = () => {
  const technologies: Technologies[] = [
    { id: 'git', name: 'Git' },
    { id: 'docker', name: 'Docker' },
    { id: 'html', name: 'HTML' },
    { id: 'css', name: 'CSS' },
    { id: 'js', name: 'Javascript' },
    { id: 'ts', name: 'Typescript' },
    { id: 'tailwind', name: 'Tailwind' },
    { id: 'react', name: 'React' },
    { id: 'nextjs', name: 'NextJS' },
    { id: 'vue', name: 'Vue' },
    { id: 'nodejs', name: 'NodeJS' },
    { id: 'nestjs', name: 'NestJS' },
    { id: 'php', name: 'PHP' },
    { id: 'laravel', name: 'Laravel' },
    { id: 'mysql', name: 'MySQL' },
    { id: 'postgres', name: 'Postgres' },
    { id: 'prisma', name: 'Prisma' },
    { id: 'supabase', name: 'Supabase' },
    { id: 'linux', name: 'Linux' },
    { id: 'neovim', name: 'Neovim' },
    { id: 'pnpm', name: 'pnpm' },
    { id: 'jest', name: 'Jest' },
    { id: 'githubactions', name: 'GitHub Actions' },
  ];
  return (
    <section className="m-auto flex w-full items-center justify-center overflow-auto">
      <div className="flex w-full max-w-5xl flex-col gap-4 px-4">
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
          Tech Stack
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {technologies.map((tech) => (
            <TechStackCard
              key={tech.id}
              icon={`https://skillicons.dev/icons?i=${tech.id}`}
              tooltip={tech.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
