import SelectCategoryForm from '@/app/components/SelectCategoryForm';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';

type Props = {};

export default function StructureRoute({}: Props) {
  return (
    <>
      <div className="mx-auto w-3/5">
        <h2 className="mb-2 text-3xl font-semibold tracking-tight transition-colors">
          Which of these best describes your home?
        </h2>
        <h4 className="text-gray-500">Maximum 3 categories can be selected</h4>
      </div>
      <form>
        <SelectCategoryForm />
      </form>
      <div className="fixed bottom-0 z-0 h-24 w-full border-t bg-white">
        <div className="mx-auto flex h-full items-center justify-between px-5 lg:px-10">
          <Link href={'/'}>
            <Button variant={'secondary'}>Cancel</Button>
          </Link>
          <Button className="bg-rose-500">Next step</Button>
        </div>
      </div>
    </>
  );
}
