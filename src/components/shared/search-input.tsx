import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

export function SearchInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">Buscar projetos</span>
      <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2" />
      <Input
        placeholder="Buscar por nome, stack ou resumo"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="pl-9"
      />
    </label>
  );
}
