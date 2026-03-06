'use client';

import { useMemo, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => {
    const result: Partial<typeof initialState> = {};

    if (formData.name.trim().length < 2) result.name = 'Digite um nome válido.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      result.email = 'Informe um e-mail válido.';
    if (formData.message.trim().length < 10)
      result.message = 'A mensagem deve ter pelo menos 10 caracteres.';

    return result;
  }, [formData]);

  const hasErrors = Object.keys(errors).length > 0;
  const mailtoHref = `mailto:hello@portfolio.dev?subject=${encodeURIComponent(`Contato via portfólio de ${formData.name}`)}&body=${encodeURIComponent(formData.message + `\n\nEmail para resposta: ${formData.email}`)}`;

  function updateField(field: keyof typeof initialState, value: string) {
    setFormData((previous) => ({ ...previous, [field]: value }));
    setSubmitted(false);
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      noValidate
    >
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <Input
          id="name"
          value={formData.name}
          onChange={(event) => updateField('name', event.target.value)}
          aria-invalid={Boolean(submitted && errors.name)}
        />
        {submitted && errors.name ? (
          <p className="text-destructive text-sm">{errors.name}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          E-mail
        </label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField('email', event.target.value)}
          aria-invalid={Boolean(submitted && errors.email)}
        />
        {submitted && errors.email ? (
          <p className="text-destructive text-sm">{errors.email}</p>
        ) : null}
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Mensagem
        </label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(submitted && errors.message)}
        />
        {submitted && errors.message ? (
          <p className="text-destructive text-sm">{errors.message}</p>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-3">
        <Button type="submit">Validar mensagem</Button>
        <Button asChild variant="outline" disabled={hasErrors}>
          <a href={mailtoHref}>Enviar por e-mail</a>
        </Button>
      </div>
    </form>
  );
}
