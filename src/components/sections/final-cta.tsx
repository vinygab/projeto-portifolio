import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { getSiteData } from '@/lib/content';

export async function FinalCtaSection() {
  const site = await getSiteData();

  return (
    <section className="py-20">
      <Container>
        <div className="border-border/70 bg-card rounded-3xl border p-8 text-center sm:p-12">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
            Vamos construir algo excelente
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pronto para tirar sua ideia do papel com qualidade de produto
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Estou aberto para colaborar em projetos que exigem frontend moderno,
            atenção a detalhes e execução sólida de ponta a ponta.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Iniciar conversa</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Ver LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
