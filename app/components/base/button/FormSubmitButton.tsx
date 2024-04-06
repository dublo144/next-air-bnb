'use client';

import { useFormStatus } from 'react-dom';
import { Button } from '../../ui/button';
import { LoaderCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

type Props = { label: string; className?: string };

export default function FormSubmitButton({ label, ...props }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} {...props}>
      <LoaderCircle className={cn('mr-2 hidden h-4 w-4 animate-spin', pending && 'block')} />
      {pending ? 'Please wait' : label}
    </Button>
  );
}
