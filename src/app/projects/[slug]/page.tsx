import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getProjectBySlug, getProjects } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: 'Projeto não encontrado' };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <Button asChild variant="ghost" className="-ml-4">
          <Link href="/projects">← Voltar para projetos</Link>
        </Button>
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            {project.title}
          </h1>
          <p className="text-muted-foreground max-w-3xl">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <div className="border-border/70 relative aspect-[16/8] overflow-hidden rounded-2xl border">
          <Image
            src={project.coverImage ?? '/placeholders/project-generic.svg'}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="border-border/70 bg-card grid gap-5 rounded-2xl border p-6 sm:grid-cols-2">
          <div>
            <h2 className="text-muted-foreground text-sm font-medium tracking-[0.15em] uppercase">
              Função
            </h2>
            <p className="mt-2 text-lg">{project.role}</p>
          </div>
          <div>
            <h2 className="text-muted-foreground text-sm font-medium tracking-[0.15em] uppercase">
              Ano
            </h2>
            <p className="mt-2 text-lg">{project.year}</p>
          </div>
          <div className="sm:col-span-2">
            <h2 className="text-muted-foreground text-sm font-medium tracking-[0.15em] uppercase">
              Stack
            </h2>
            <p className="mt-2 text-lg">{project.stack.join(' • ')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
