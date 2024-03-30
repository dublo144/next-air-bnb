'use client';

import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import React from 'react';

const variants = cva(
  'relative w-full rounded-lg transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 border',
  {
    variants: {
      kind: {
        primary: ['bg-rose-500', 'border-rose-500', 'text-white', 'font-semibold'],
        outline: ['bg-white', 'border-black', 'text-black'],
      },
      size: {
        small: ['py-1', 'text-sm', 'font-light'],
        medium: ['py-3', 'text-md', 'font-semibold', 'border-2'],
      },
    },
    defaultVariants: { kind: 'primary', size: 'medium' },
  }
);

interface Props extends VariantProps<typeof variants> {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  icon?: LucideIcon;
}

export default function Button({ label, onClick, disabled, icon: Icon, kind, size }: Props) {
  return (
    <button className={cn(variants({ kind, size }))} onClick={onClick} disabled={disabled}>
      {Icon && <Icon className="absolute left-4 top-3" />}
      {label}
    </button>
  );
}
