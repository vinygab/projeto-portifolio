import type { Metadata } from 'next';

import { Container } from '@/components/layout/container';
import { ContactForm } from '@/components/sections/contact-form';
import { SectionHeading } from '@/components/shared/section-heading';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Fale comigo para discutir seu próximo projeto digital.',
};

export default function ContactPage() {
  return (
    <section className="py-16">
      <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos conversar sobre seu produto"
          description="Preencha o formulário para validar a mensagem e enviar por e-mail. A integração com Resend/Nodemailer pode ser habilitada depois sem refatoração."
        />
        <div className="border-border/70 bg-card rounded-2xl border p-6">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
