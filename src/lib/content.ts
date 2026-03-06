import fs from 'node:fs/promises';
import path from 'node:path';

import type { Experience, Project, SiteData, Skills } from '@/lib/types';

const contentDirectory = path.join(process.cwd(), 'content');

async function readJsonFile<T>(fileName: string): Promise<T> {
  const filePath = path.join(contentDirectory, fileName);
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content) as T;
}

export async function getSiteData() {
  return readJsonFile<SiteData>('site.json');
}

export async function getProjects() {
  const projects = await readJsonFile<Project[]>('projects.json');
  return projects.sort((a, b) => Number(b.year) - Number(a.year));
}

export async function getFeaturedProjects() {
  const projects = await getProjects();
  return projects.filter((project) => project.featured);
}

export async function getProjectBySlug(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}

export async function getAllTags() {
  const projects = await getProjects();
  return Array.from(
    new Set(projects.flatMap((project) => project.tags)),
  ).sort();
}

export async function getExperience() {
  return readJsonFile<Experience[]>('experience.json');
}

export async function getSkills() {
  return readJsonFile<Skills>('skills.json');
}
