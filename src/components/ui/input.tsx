import * as React from 'react';

import { cn } from '@/lib/utils';

export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      className={cn(
        'border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring ring-offset-background flex h-11 w-full rounded-xl border px-3 py-1 text-sm shadow-xs transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}
