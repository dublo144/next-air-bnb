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

  if (data === null) {
  } else if (!data.addedCategories && !data.addedDescription && !data.addedLocation) {
    return redirect(`create/${data.id}/structure`);
  }
}
