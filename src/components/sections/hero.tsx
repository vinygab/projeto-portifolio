import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { TextType } from '@/components/ui/text-type';
import { getSiteData } from '@/lib/content';

export async function HeroSection() {
  const site = await getSiteData();

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <Container className="space-y-8">
        <div className="max-w-3xl space-y-5">
          <TextType
            text={["Vinícius Oliveira", "Software Engineer"]}
            as="h1"
            className="text-4xl font-semibold tracking-tight sm:text-6xl"
            typingSpeed={100}
            pauseDuration={2000}
            deletingSpeed={60}
            showCursor={true}
            cursorCharacter="_"
            loop={true}
            initialDelay={100}
          />
          <p className="text-muted-foreground text-lg">{site.bio}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link href="/projects">
              Ver Projetos
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">Contato</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
