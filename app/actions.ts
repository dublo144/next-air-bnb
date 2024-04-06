'use server';

import { redirect } from 'next/navigation';
import prisma from './lib/db';
import { supabase } from './lib/supabase';

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

    return redirect(`/become-a-host/${data.id}/structure`);
  } else if (!data.privacyType) {
    return redirect(`/become-a-host/${data.id}/privacy-type`);
  } else if (!data.categories && !data.description && !data.location) {
    return redirect(`/become-a-host/${data.id}/structure`);
  } else if (data.categories && !data.description) {
    return redirect(`/become-a-host/${data.id}/description`);
  }
}

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

  return redirect('./description');
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
    },
  });

  return redirect('/');
}
