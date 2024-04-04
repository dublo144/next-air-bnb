'use client';

import { submitCategories } from '@/app/actions';
import SelectCategoryForm from '@/app/components/SelectCategoryForm';
import FormSubmitButton from '@/app/components/base/button/FormSubmitButton';
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
        <div className="fixed bottom-0 z-0 h-24 w-full border-t bg-white">
          <div className="mx-auto flex h-full items-center justify-between px-5 lg:px-10">
            <Button variant={'secondary'} asChild>
              <Link href={'/'}>Cancel</Link>
            </Button>
            <FormSubmitButton label="Add categories" className="bg-rose-500 font-bold" />
          </div>
        </div>
      </form>
    </>
  );
}
