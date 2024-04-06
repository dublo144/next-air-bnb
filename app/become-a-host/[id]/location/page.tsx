import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function SelectLocationForm({}: Props) {
  return (
    <Button>
      <Link href={'./description'}>Go to description</Link>
    </Button>
  );
}
