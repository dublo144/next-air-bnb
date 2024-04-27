'use client';

import SelectCategoryForm from '@/components/become-a-host/SelectCategoryForm';
import WizardBottomBar from '@/components/become-a-host/WizardBottomBar';
import React from 'react';
import { submitCategories } from './actions';

type Props = { params: { id: string } };

export default function StructureRoute({ params }: Props) {
  const submitCategoriesWithHomeId = submitCategories.bind(null, params.id);

  return (
    <form action={submitCategoriesWithHomeId} className="flex flex-grow">
      <div className="mx-auto my-auto w-3/4">
        <input hidden name="homeId" defaultValue={params.id} />
        <SelectCategoryForm />
      </div>
      <WizardBottomBar />
    </form>
  );
}
