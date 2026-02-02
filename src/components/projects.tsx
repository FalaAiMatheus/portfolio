import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import type { ProjectCardProps } from './ui/project-card';
import { ProjectCard } from './ui/project-card';

export const ProjectsSection = () => {
  const projects: ProjectCardProps[] = [
    {
      github: 'https://github.com/FalaAiMatheus/frontend-day-2024',
      title: 'Front End Day 2024',
      description: 'Site do Front End Day',
      site: 'https://www.frontendday.com.br/',
    },
    {
      github: 'https://github.com/javascript-ceara/portal-frontend',
      title: 'Portal JavaScript Ceará',
      description: 'Site do JavaScript Ceará',
      site: 'https://reactjs-ceara-portal.vercel.app/',
    },
    {
      github: 'https://www.opovo.com.br/trabalheconosco/',
      title: 'O POVO Trabalhe Conosco',
      description: 'Site do trabalhe conosco',
      site: 'https://www.opovo.com.br/trabalheconosco/',
    },
    {
      github: 'https://github.com/FalaAiMatheus/services-orders-api',
      title: 'Services Orders API',
      description: 'Projeto da faculdade',
    },
    {
      github: 'https://github.com/FalaAiMatheus/consulta-cep',
      title: 'Consulta CEP',
      description: 'Projeto sobre consulta cep',
    },
    {
      github: 'https://github.com/FalaAiMatheus/eco-learning',
      title: 'Eco Learning',
      description: 'Projeto da Eco Learning',
    },
    {
      github: 'https://github.com/FalaAiMatheus/meetup-supabase',
      title: 'Meetup Supabase',
      description: 'Meetup sobre Supabase',
    },
    {
      github:
        'https://github.com/FalaAiMatheus/jwt-no-laravel-do-jeito-certo-sem-gambiarra',
      title: 'Jwt no Laravel',
      description: 'Projeto para video no Yt',
      site: 'https://www.youtube.com/watch?v=QWG-mGjdReA&pp=2AbABA%3D%3D',
    },
    {
      github: 'https://github.com/FalaAiMatheus/to-do-list-api',
      title: 'ToDo List API - Laravel',
      description: 'Projeto para treinar Laravel',
    },
    {
      github: 'https://github.com/FalaAiMatheus/bora-postar',
      title: 'Bora Postar',
      description: 'Projeto FullStack',
    },
    {
      github: 'https://github.com/FalaAiMatheus/meetup-py-js-github-actions',
      title: 'Meetup PYJS Github Actions',
      description: 'Meetup sobre Github Actions',
    },
  ];
  return (
    <section className="m-auto flex w-full items-center justify-center overflow-auto">
      <div className="flex w-full max-w-5xl flex-col gap-4 px-4">
        <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
          Projetos
        </h2>
        <Carousel>
          <CarouselContent>
            {projects.map((project, projectIndex) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3"
                key={projectIndex + 1}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  github={project.github}
                  site={project.site}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
