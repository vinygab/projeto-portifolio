import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projetos' },
  { href: '/about', label: 'Sobre' },
  { href: '/contact', label: 'Contato' },
];

export function Header() {
  return (
    <header className="border-border/60 bg-background/85 sticky top-0 z-40 border-b backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="shrink-0 text-sm font-semibold tracking-tight"
        >
          AM.
        </Link>
        <nav
          aria-label="Navegação principal"
          className="flex flex-1 items-center justify-center gap-1 overflow-x-auto"
        >
          {navLinks.map((link) => (
            <Button key={link.href} variant="ghost" size="sm" asChild>
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
}
