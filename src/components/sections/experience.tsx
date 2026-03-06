import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExperience } from '@/lib/content';

export async function ExperienceSection() {
  const experience = await getExperience();

  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeading eyebrow="Experiência" title="Histórico profissional" />
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={item.company} className="border-border/70">
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                  <CardTitle>
                    {item.title} · {item.company}
                  </CardTitle>
                  <span className="text-muted-foreground text-sm">
                    {item.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground list-disc space-y-2 pl-5 text-sm">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
