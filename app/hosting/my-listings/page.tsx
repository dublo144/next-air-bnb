import { getCurrentUser } from '@/app/actions/actions';
import prisma from '@/lib/db';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React from 'react';

type Props = {};

async function getUserListings() {
  const user = await getCurrentUser();

  return await prisma.home.findMany({
    where: {
      userId: user!.id,
    },
  });
}

export default function MyListings({}: Props) {
  return <div>MyListings</div>;
}
