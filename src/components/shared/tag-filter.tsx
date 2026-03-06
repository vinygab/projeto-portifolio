import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function TagFilter({
  tags,
  activeTag,
  onChange,
}: {
  tags: string[];
  activeTag: string;
  onChange: (tag: string) => void;
}) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filtro de tags"
    >
      {['Todos', ...tags].map((tag) => {
        const selected = tag === activeTag;

        return (
          <Button
            key={tag}
            variant={selected ? 'default' : 'outline'}
            size="sm"
            className={cn('rounded-full', !selected && 'border-border/80')}
            onClick={() => onChange(tag)}
            role="tab"
            aria-selected={selected}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
}
