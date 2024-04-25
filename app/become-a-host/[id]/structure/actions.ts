import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export async function submitCategories(formData: FormData) {
  const categories = formData.get('categories') as string;
  const homeId = formData.get('homeId') as string;

  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      categories,
    },
  });

  return redirect('./privacy-type');
}
