'use client';

import React, { useEffect, useState } from 'react';
import { categoryItems } from '../../lib/categoryItems';
import { Card, CardHeader } from '../ui/card';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { AnimationSequence, motion, stagger, useAnimate } from 'framer-motion';

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

  const [scope, animate] = useAnimate();

  useEffect(() => {
    const sequence: AnimationSequence = [
      [
        '.category-heading',
        { opacity: 1, transform: 'translateY(1rem)' },
        { duration: 1.5, ease: [0, 0.71, 0.2, 1.01] },
      ],
      ['.category-card', { x: 0, opacity: 1 }, { delay: stagger(0.2) }],
    ];
    animate(sequence);
  });

  return (
    <div className="mx-auto" ref={scope}>
      <div className="category-heading mb-12 space-y-2 opacity-0">
        <h1 className="text-3xl font-bold tracking-tight">
          Which of these best describes your home?
        </h1>
        <h4 className="text-gray-500">Maximum 3 categories can be selected.</h4>
      </div>

      <div className="mx-auto mb-36 mt-10 grid grid-cols-3 gap-8">
        <input hidden defaultValue={selectedCategories.join(';')} name="categories" />
        {categoryItems.map((item) => (
          <motion.div key={item.id} whileTap={{ scale: 0.9 }}>
            <Card
              key={item.id}
              onClick={() => handleSelectDeselect(item.name)}
              className={cn(
                'category-card h-full translate-x-5 cursor-pointer border-2 opacity-0 hover:border-rose-500',
                selectedCategories.includes(item.name) && 'border-primary border-rose-500'
              )}
            >
              <CardHeader className="flex h-full select-none flex-row items-center space-x-3">
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
          </motion.div>
        ))}
      </div>
    </div>
  );
}
