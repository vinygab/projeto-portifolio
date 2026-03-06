import { Container } from '@/components/layout/container';
import { ProjectCard } from '@/components/shared/project-card';
import { SectionHeading } from '@/components/shared/section-heading';
import { Button } from '@/components/ui/button';
import { getFeaturedProjects } from '@/lib/content';
import Link from 'next/link';

export async function FeaturedProjectsSection() {
  const projects = await getFeaturedProjects();

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Projetos"
          title="Trabalhos em destaque"
          description="Alguns projetos recentes com foco em performance, clareza visual e impacto de produto."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Button asChild variant="outline">
          <Link href="/projects">Explorar todos os projetos</Link>
        </Button>
      </Container>
    </section>
  );
}
