'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { Container } from '@/components/layout/container';
import { SectionHeading } from '@/components/shared/section-heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const highlights = [
  {
    title: 'Frontend Arquitetado',
    description:
      'Design systems sólidos, componentes reutilizáveis e código escalável para produtos em crescimento.',
  },
  {
    title: 'Performance Real',
    description:
      'Otimização contínua de Core Web Vitals, carregamento inteligente e foco em experiência fluida.',
  },
  {
    title: 'UI/UX de Produto',
    description:
      'Interfaces claras, micro-interações elegantes e decisões orientadas por jornada do usuário.',
  },
  {
    title: 'Integrações API',
    description:
      'Conexões robustas com serviços e dados, mantendo confiabilidade e excelente feedback de estado.',
  },
];

export function HighlightsSection() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section key={pathname} className="py-16">
      <Container className="space-y-8">
        <SectionHeading title="Entrego interfaces premium com foco no negócio" />
        <div className="grid gap-4 sm:grid-cols-2">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
            >
              <Card className="border-border/70 h-full">
                <CardHeader>
                  <CardTitle>{highlight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
