import * as React from 'react';

import { cn } from '@/lib/utils';

export function Textarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring ring-offset-background flex min-h-[120px] w-full rounded-xl border px-3 py-2 text-sm shadow-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
