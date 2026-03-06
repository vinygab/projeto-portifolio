import type { Metadata } from 'next';

import { Container } from '@/components/layout/container';
import { ProjectsBrowser } from '@/components/sections/projects-browser';
import { SectionHeading } from '@/components/shared/section-heading';
import { getAllTags, getProjects } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Projetos',
  description: 'Lista de projetos com filtros por tags e busca por texto.',
};

export default async function ProjectsPage() {
  const [projects, tags] = await Promise.all([getProjects(), getAllTags()]);

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Portfólio"
          title="Projetos"
          description="Explore os projetos por tecnologia, contexto e tipo de desafio entregue."
        />
        <ProjectsBrowser projects={projects} tags={tags} />
      </Container>
    </section>
  );
}
