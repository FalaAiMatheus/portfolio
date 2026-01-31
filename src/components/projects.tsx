import { ProjectCard } from './ui/project-card';

export const ProjectsSection = () => {
  return (
    <section className="m-auto flex w-full items-center justify-center overflow-auto">
      <div className="flex w-full max-w-5xl flex-col gap-4 px-4">
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
          Projetos
        </h2>
        <div className="flex items-center gap-2">
          {Array.from({ length: 10 }).map(() => (
            <ProjectCard />
          ))}
        </div>
      </div>
    </section>
  );
};
