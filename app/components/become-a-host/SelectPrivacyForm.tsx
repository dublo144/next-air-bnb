'use client';

import { privacyTypeItems } from '@/app/lib/privacyItems';
import React, { Key, useState } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type Props = {};

export default function SelectPrivacyForm({}: Props) {
  const [selectedPrivacyType, setSelectedPrivacyType] = useState<String>('place');
  return (
    <div className="mx-auto space-y-4">
      <h1 className="mb-6 text-center text-3xl font-bold tracking-tight transition-colors">
        What type of place will the guests have?
      </h1>

      <input hidden defaultValue={selectedPrivacyType as string} name="privacyType" />
      {privacyTypeItems.map((privacyItem) => (
        <Card
          key={privacyItem.name as Key}
          onClick={() => setSelectedPrivacyType(privacyItem.name)}
          className={cn(
            'box-border cursor-pointer border-2 transition-colors hover:border-rose-500',
            selectedPrivacyType === privacyItem.name && 'border-rose-500'
          )}
        >
          <CardHeader className="flex flex-row justify-between space-x-6">
            <div>
              <div className="text-xl font-bold">{privacyItem.title}</div>
              <p className="w-4/5 text-wrap">{privacyItem.description}</p>
            </div>
            <div className="flex">
              <Image
                src={privacyItem.iconUrl}
                alt={privacyItem.name}
                height={40}
                width={40}
                className="mx-auto my-auto"
              />
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
