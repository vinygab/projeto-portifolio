import type { Metadata } from 'next';
import Image from 'next/image';

import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Badge } from '@/components/ui/badge';
import { getSiteData, getSkills } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça minha trajetória e principais competências técnicas.',
};

export default async function AboutPage() {
  const [site, skills] = await Promise.all([getSiteData(), getSkills()]);

  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionHeading
          eyebrow="Sobre"
          title="Construo produtos digitais com padrão premium"
          description={site.bio}
        />
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="border-border/70 relative aspect-square overflow-hidden rounded-2xl border">
            <Image
              src="/minhafoto.png"
              alt="Foto de perfil de Vinícius Oliveira"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            {Object.entries(skills.categories).map(([category, values]) => (
              <div key={category} className="space-y-3">
                <h2 className="text-lg font-semibold capitalize">{category}</h2>
                <div className="flex flex-wrap gap-2">
                  {values.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="px-3 py-1.5 text-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
