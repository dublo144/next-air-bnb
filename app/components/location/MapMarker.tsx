import { HomeIcon } from 'lucide-react';
import React from 'react';

type Props = {};

export default function MapMarker({}: Props) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-rose-500 opacity-20 before:absolute before:inset-0 before:z-0 before:rounded-full before:bg-rose-500" />
      <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-rose-500">
        <HomeIcon size={24} className="z-10 text-white" />
      </div>
    </div>
  );
}
