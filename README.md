# Portfólio Profissional com Next.js

Portfólio moderno, responsivo e pronto para deploy com foco em performance, acessibilidade e manutenção simples via arquivos de conteúdo.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- shadcn/ui (base de componentes em `src/components/ui`)
- Framer Motion (animações sutis)
- next-themes (dark/light mode)
- ESLint + Prettier

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra: `http://localhost:3000`

## Scripts

```bash
npm run dev      # desenvolvimento
npm run build    # build de produção
npm run start    # iniciar produção
npm run lint     # lint
npx prettier --check .
```

## Estrutura do projeto

```txt
content/
  site.json
  projects.json
  experience.json
  skills.json
public/placeholders/
src/
  app/
  components/
    layout/
    sections/
    shared/
    ui/
  lib/
```

## Editando conteúdo sem mexer em componentes

Todos os dados ficam em `content/`:

- `site.json`: nome, headline, bio e redes sociais
- `projects.json`: projetos, links, tags e destaque
- `experience.json`: experiências profissionais
- `skills.json`: categorias de skills

Depois de editar, basta salvar e recarregar o site.

## Tema e visual

- Tokens de cor e dark mode estão em `src/app/globals.css`
- Tipografia principal definida por variáveis CSS no `globals.css`
- Componentes base em `src/components/ui`

Para ajustar paleta, altere as variáveis `--primary`, `--background`, etc. em `globals.css`.

## SEO

Implementado com metadata do App Router:

- Metadata global em `src/app/layout.tsx`
- Metadata por página em rotas (`/projects`, `/about`, `/contact`, detalhes)
- `sitemap` em `src/app/sitemap.ts`
- `robots` em `src/app/robots.ts`

## Formulário de contato

Por padrão, o envio é via `mailto:` com validação client-side.

### Bônus opcional: envio real por API

Você pode habilitar envio real criando uma route handler (ex: `src/app/api/contact/route.ts`) com Resend ou Nodemailer. O formulário já está isolado em `src/components/sections/contact-form.tsx`, facilitando essa integração.

## Deploy na Vercel

1. Suba o repositório no GitHub.
2. Importe o projeto na Vercel.
3. Framework detectado automaticamente como Next.js.
4. Deploy com build padrão.

Comandos úteis para validação antes de deploy:

```bash
npm run lint
npm run build
```
