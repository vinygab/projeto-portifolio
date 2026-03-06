import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { Project } from '@/lib/types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group border-border/70 h-full overflow-hidden">
      <div className="border-border/60 relative aspect-[16/10] overflow-hidden border-b">
        <Image
          src={project.coverImage ?? '/placeholders/project-generic.svg'}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="outline" className="border-border/70">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.summary}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground text-sm">
          {project.stack.join(' • ')}
        </p>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href={`/projects/${project.slug}`}>
              Ver detalhes
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          {project.links.github ? (
            <Button variant="ghost" size="sm" asChild>
              <Link
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`Abrir repositório ${project.title}`}
              >
                <Github className="size-4" />
                Código
              </Link>
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
