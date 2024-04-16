'use client';

import React, { useState } from 'react';
import { categoryItems } from '../../lib/categoryItems';
import { Card, CardHeader } from '../ui/card';
import Image from 'next/image';
import { submitCategories } from '@/app/actions';
import WizardBottomBar from './WizardBottomBar';
import { cn } from '@/lib/utils';

type Props = {};

export default function SelectCategoryForm({}: Props) {
  const [selectedCategories, setSelectedCategories] = useState<String[]>([]);

  const handleSelectDeselect = (categoryId: String) => {
    const isSelected = selectedCategories.includes(categoryId);
    if (isSelected) {
      setSelectedCategories(selectedCategories.filter((c) => c !== categoryId));
    } else {
      if (selectedCategories.length === 3) {
        setSelectedCategories([...selectedCategories.slice(1), categoryId]);
      } else {
        setSelectedCategories([...selectedCategories, categoryId]);
      }
    }
  };

  return (
    <div className="mx-auto space-y-4">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight transition-colors">
          Which of these best describes your home?
        </h1>
        <h4 className="text-gray-500">Maximum 3 categories can be selected.</h4>
      </div>

      <div className="mx-auto mb-36 mt-10 grid grid-cols-3 gap-8">
        <input hidden defaultValue={selectedCategories.join(';')} name="categories" />
        {categoryItems.map((item) => (
          <Card
            key={item.id}
            onClick={() => handleSelectDeselect(item.name)}
            className={cn(
              'h-full cursor-pointer border-2',
              selectedCategories.includes(item.name) && 'border-primary border-rose-500'
            )}
          >
            <CardHeader className="flex h-full flex-row items-center space-x-3">
              <Image
                src={item.imageUrl}
                alt={item.name}
                height={32}
                width={32}
                className="h-8 w-8"
              />
              <h3 className="font-bold">{item.title}</h3>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
