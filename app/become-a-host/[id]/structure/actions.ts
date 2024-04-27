'use server';

import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export async function submitCategories(id: string, formData: FormData) {
  const categories = formData.get('categories') as string;

  await prisma.home.update({
    where: {
      id,
    },
    data: {
      categories,
    },
  });

  return redirect('./privacy-type');
}
