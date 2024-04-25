import { submitPrivacyType } from '@/app/actions/actions';
import FormSubmitButton from '@/components/base/button/FormSubmitButton';
import SelectPrivacyForm from '@/components/become-a-host/SelectPrivacyForm';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = { params: { id: string } };

export default function PrivacyTypeSelection({ params }: Props) {
  return (
    <form action={submitPrivacyType} className="flex flex-grow">
      <div className="mx-auto my-auto">
        <input hidden name="homeId" defaultValue={params.id} />
        <SelectPrivacyForm />
      </div>
      <div className="fixed bottom-0 z-0 h-24 w-full border-t bg-white">
        <div className="mx-auto flex h-full items-center justify-between px-5 lg:px-10">
          <Button variant={'secondary'} asChild>
            <Link href={'/'}>Cancel</Link>
          </Button>
          <FormSubmitButton label="Add type of place" className="bg-rose-500 font-bold" />
        </div>
      </div>
    </form>
  );
}
