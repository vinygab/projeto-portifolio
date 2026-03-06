export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  role: string;
  year: string;
  stack: string[];
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  coverImage?: string;
};

export type Experience = {
  company: string;
  title: string;
  period: string;
  bullets: string[];
};

export type Skills = {
  categories: Record<string, string[]>;
};

export type SiteData = {
  name: string;
  headline: string;
  bio: string;
  aboutDescription?: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    x: string;
    dribbble: string;
  };
};
