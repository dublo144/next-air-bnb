'use client';

import React, { useState } from 'react';
import { categoryItems } from '../lib/categoryItems';
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';

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
    <div className="mx-auto mb-36 mt-10 grid w-3/5 grid-cols-4 gap-8">
      <input hidden defaultValue={selectedCategories.join(';')} name="categories" />
      {categoryItems.map((item) => (
        <div key={item.id} className="cursor-pointer">
          <Card
            onClick={() => handleSelectDeselect(item.name)}
            className={
              selectedCategories.includes(item.name) ? 'border-primary border-rose-500' : ''
            }
          >
            <CardHeader>
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
        </div>
      ))}
    </div>
  );
}
