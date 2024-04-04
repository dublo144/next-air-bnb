'use server';

import { redirect } from 'next/navigation';
import prisma from './lib/db';

// TODO: Dont use kindeId
export async function createHome({ kindeId }: { kindeId: string }) {
  const user = await prisma.user.findUnique({
    where: {
      kindeId: kindeId,
    },
  });

  const data = await prisma.home.findFirst({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  console.log('Found user with id: ', user?.id);

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: user?.id,
      },
    });

    console.log('created home with id ', data.id);

    return redirect(`/newListing/${data.id}/structure`);
  } else if (!data.categories && !data.description && !data.location) {
    return redirect(`/newListing/${data.id}/structure`);
  } else if (data.categories && !data.description) {
    return redirect(`/newListing/${data.id}/description`);
  }
}

export async function submitCategories(formData: FormData) {
  const categories = formData.get('categories') as string;
  const homeId = formData.get('homeId') as string;

  const data = await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      categories: categories,
    },
  });

  return redirect(`./description`);
}
