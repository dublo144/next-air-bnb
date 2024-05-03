import { Suspense } from 'react';
import ListingCard, { LoadingSkeleton } from '../components/explore/ListingCard';
import MapFilterItems from '../components/mapFilter/MapFilterItems';
import { Separator } from '../components/ui/separator';
import prisma from '../lib/db';
import { FileQuestion } from 'lucide-react';

type Props = {
  searchParams: {
    filter?: string;
  };
};

async function getListings(filter?: string) {
  return await prisma.home.findMany({
    where: {
      published: true,
      categories:
        {
          contains: filter,
        } ?? undefined,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      location: {
        select: {
          fullAddress: true,
        },
      },
      User: {
        select: {
          firstName: true,
        },
      },
    },
  });
}

export default function Home({ searchParams }: Props) {
  return (
    <div className="container mx-auto space-y-6 px-5 lg:px-10">
      <MapFilterItems />
      <Separator />

      <Suspense
        key={searchParams.filter}
        fallback={
          <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        }
      >
        <Listings searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function Listings({ searchParams }: Props) {
  const listings = await getListings(searchParams.filter);

  return listings.length ? (
    <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {listings.map((listing) => (
        <ListingCard
          key={listing.id}
          location={listing.location?.fullAddress as string}
          imageUrl={listing.photo as string}
          description={listing.description as string}
          price={listing.price as number}
          host={listing.User?.firstName as string}
        />
      ))}
    </div>
  ) : (
    <NoListingsFound />
  );
}

const NoListingsFound = () => {
  return (
    <div className="flex min-h-full flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-rose-500/10">
        <FileQuestion className="h-8 w-8 text-rose-500" />
      </div>
      <p className="text-xl font-semibold">No listings in the category... yet..</p>
    </div>
  );
};
