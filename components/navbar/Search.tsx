'use client';

import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

type Props = {};

export default function Search({}: Props) {
  return (
    <div className="w-full cursor-pointer rounded-full border py-2 shadow-sm transition hover:shadow-md md:w-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">Anywhere</div>
        <div className="hidden flex-1 border-x px-6 text-center text-sm font-semibold sm:block">
          Any week
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 pr-2 text-sm">
          <div className="hidden sm:block">Add guests</div>
          <div className="rounded-full bg-rose-500 p-2 text-white">
            <SearchIcon size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
