import { submitDescription } from '@/app/actions';
import DescriptionForm from '@/app/components/become-a-host/DescriptionForm';
import WizardBottomBar from '@/app/components/become-a-host/WizardBottomBar';
import React from 'react';

type Props = { params: { id: string } };

export default function DescriptionPage({ params }: Props) {
  return (
    <form action={submitDescription} className="flex flex-grow">
      <div className="mx-auto my-auto w-1/2">
        <input hidden name="homeId" defaultValue={params.id} />
        <DescriptionForm />
      </div>
      <WizardBottomBar />
    </form>
  );
}
