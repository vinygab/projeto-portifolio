import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import StarBorder from '@/components/ui/star-border';

const SKILL_CATEGORIES = [
  {
    title: 'Front-end',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Back-end',
    techs: ['Python'],
  },
  {
    title: 'Banco de Dados',
    techs: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    title: 'Ferramentas',
    techs: ['Git / GitHub', 'Figma', 'GameMaker'],
  },
];

export function SkillsSection() {
  return (
    <section className="py-16">
      <Container className="space-y-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tecnologias"
          description="Linguagens, frameworks e ferramentas que utilizo no dia a dia"
        />
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat) => (
            <Card
              key={cat.title}
              className="border-border/70 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader>
                <CardTitle>{cat.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {cat.techs.map((tech) => (
                    <StarBorder
                      key={tech}
                      as="div"
                      className="star-badge"
                      color="rgba(150, 200, 255, 0.9)"
                      speed="2.5s"
                      thickness={1}
                    >
                      <Badge
                        variant="outline"
                        className="px-3 py-1.5 text-sm border-0 bg-transparent"
                      >
                        {tech}
                      </Badge>
                    </StarBorder>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
