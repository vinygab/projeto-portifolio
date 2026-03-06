'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { ProjectCard } from '@/components/shared/project-card';
import { SearchInput } from '@/components/shared/search-input';
import { TagFilter } from '@/components/shared/tag-filter';
import type { Project } from '@/lib/types';

export function ProjectsBrowser({
  projects,
  tags,
}: {
  projects: Project[];
  tags: string[];
}) {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('Todos');

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesTag =
        activeTag === 'Todos' || project.tags.includes(activeTag);
      const matchesQuery =
        !normalizedQuery ||
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.summary.toLowerCase().includes(normalizedQuery) ||
        project.stack.join(' ').toLowerCase().includes(normalizedQuery);

      return matchesTag && matchesQuery;
    });
  }, [activeTag, projects, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <SearchInput value={query} onChange={setQuery} />
        <div className="flex flex-wrap gap-2">
          <TagFilter tags={tags} activeTag={activeTag} onChange={setActiveTag} />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.03 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
      {filteredProjects.length === 0 ? (
        <p className="border-border text-muted-foreground rounded-xl border border-dashed p-8 text-center">
          Nenhum projeto encontrado para os filtros selecionados.
        </p>
      ) : null}
    </div>
  );
}
