'use server';

import { redirect } from 'next/navigation';
import prisma from '../../lib/db';
import { supabase } from '../../lib/supabase';
import { User } from '@prisma/client';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { Location } from '@/components/become-a-host/LocationForm';

export async function getCurrentUser() {
  const { getUser } = getKindeServerSession();
  const kindeUser = await getUser();

  // User not logged in for some reason
  if (!kindeUser || kindeUser === null || !kindeUser.id) {
    return redirect('/api/auth/login');
  }

  return await prisma.user.findFirstOrThrow({
    where: {
      kindeId: kindeUser.id,
    },
  });
}

export async function createHome({ user }: { user: User | null }) {
  if (!user) {
    return redirect('/api/auth/login');
  }

  const data = await prisma.home.findFirst({
    where: {
      userId: user?.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  if (data === null) {
    const data = await prisma.home.create({
      data: {
        userId: user?.id,
      },
    });
    return redirect(`/become-a-host/${data.id}/structure`);
  } else if (!data.privacyType) {
    return redirect(`/become-a-host/${data.id}/privacy-type`);
  } else if (!data.locationId) {
    return redirect(`/become-a-host/${data.id}/location`);
  } else if (!data.categories && !data.description) {
    return redirect(`/become-a-host/${data.id}/structure`);
  } else if (data.categories && !data.description) {
    return redirect(`/become-a-host/${data.id}/description`);
  }
}

export async function submitPrivacyType(formData: FormData) {
  const privacyType = formData.get('privacyType') as string;
  const homeId = formData.get('homeId') as string;

  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      privacyType,
    },
  });

  return redirect('./location');
}

export const submitLocation = async (formData: FormData) => {
  const locationJson = formData.get('homeLocation') as string;
  const homeId = formData.get('homeId') as string;

  const { fullAddress, placeId, lat, lng }: Location = JSON.parse(locationJson);

  const location = await prisma.location.create({
    data: {
      fullAddress,
      placeId,
      lat,
      lng,
    },
  });

  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      locationId: location.id,
    },
  });

  return redirect('./description');
};

export async function submitDescription(formData: FormData) {
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const price = formData.get('price');
  const image = formData.get('image') as File;
  const guests = formData.get('guests');
  const bedrooms = formData.get('bedrooms');
  const beds = formData.get('beds');
  const bathrooms = formData.get('bathrooms');

  const homeId = formData.get('homeId') as string;
  const user = await getCurrentUser();

  const { data: imageUpload } = await supabase.storage
    .from('images')
    .upload(`${image.name}-${new Date()}`, image, {
      cacheControl: '2592000',
      contentType: 'image/png',
    });

  await prisma.home.update({
    where: {
      id: homeId,
    },
    data: {
      title,
      description,
      price: Number(price),
      photo: imageUpload?.path,
      guests: Number(guests),
      bedrooms: Number(bedrooms),
      beds: Number(beds),
      bathrooms: Number(bathrooms),
      published: true,
    },
  });

  await prisma.user.update({
    data: {
      isHost: true,
    },
    where: {
      id: user.id,
    },
  });

  return redirect('/');
}
