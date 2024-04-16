'use client';

import { submitCategories } from '@/app/actions';
import SelectCategoryForm from '@/app/components/become-a-host/SelectCategoryForm';
import WizardBottomBar from '@/app/components/become-a-host/WizardBottomBar';
import React from 'react';

type Props = { params: { id: string } };

export default function StructureRoute({ params }: Props) {
  return (
    <form action={submitCategories} className="flex flex-grow">
      <div className="mx-auto my-auto w-3/4">
        <input hidden name="homeId" defaultValue={params.id} />
        <SelectCategoryForm />
      </div>
      <WizardBottomBar />
    </form>
  );
}
