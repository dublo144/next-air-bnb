'use client';

import { submitCategories } from '@/app/actions';
import FormSubmitButton from '@/app/components/base/button/FormSubmitButton';
import SelectCategoryForm from '@/app/components/become-a-host/SelectCategoryForm';
import WizardBottomBar from '@/app/components/become-a-host/WizardBottomBar';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = { params: { id: string } };

export default function StructureRoute({ params }: Props) {
  return (
    <>
      <div className="mx-auto w-3/5">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describes your home?
        </h2>
        <h4 className="text-gray-500">Maximum 3 categories can be selected</h4>
      </div>

      <form action={submitCategories}>
        <input hidden name="homeId" defaultValue={params.id} />
        <SelectCategoryForm />
        <WizardBottomBar />
      </form>
    </>
  );
}
