import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { getSiteData } from '@/lib/content';

export async function Footer() {
  const site = await getSiteData();

  return (
    <footer className="border-border/60 border-t py-10">
      <Container className="text-muted-foreground flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {site.name}. Todos os direitos
          reservados.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </Link>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </Link>
          <Link
            href={site.socials.x}
            target="_blank"
            rel="noreferrer"
            aria-label="X/Twitter"
          >
            X
          </Link>
        </div>
      </Container>
    </footer>
  );
}
