import React from 'react';
import { Progress } from '../ui/progress';
import { Button } from '../ui/button';
import Link from 'next/link';
import FormSubmitButton from '../base/button/FormSubmitButton';

type Props = {};

export default function WizardBottomBar({}: Props) {
  return (
    <div className="fixed bottom-0 z-0 h-28 w-full border-t bg-white">
      <Progress className="rounded-none text-rose-500" value={30} />
      <div className="mx-auto flex h-full items-center justify-between p-6 lg:px-10">
        <Button variant={'secondary'} asChild>
          <Link href={'/'}>Cancel</Link>
        </Button>
        <FormSubmitButton label="Next step" className="bg-rose-500 font-bold" />
      </div>
    </div>
  );
}
