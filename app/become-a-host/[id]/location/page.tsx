import { submitLocation } from '@/app/actions/actions';
import LocationForm from '@/components/become-a-host/LocationForm';
import WizardBottomBar from '@/components/become-a-host/WizardBottomBar';
import React from 'react';

type Props = { params: { id: string } };

export default function SelectLocationForm({ params }: Props) {
  return (
    <form action={submitLocation} className="flex flex-grow">
      <div className="mx-auto my-auto w-1/2">
        <input hidden name="homeId" defaultValue={params.id} />
        <LocationForm />
      </div>
      <WizardBottomBar />
    </form>
  );
}
