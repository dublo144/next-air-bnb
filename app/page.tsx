import ListingCard from './components/explore/ListingCard';
import MapFilterItems from './components/mapFilter/MapFilterItems';
import { Separator } from './components/ui/separator';
import prisma from './lib/db';

async function getListings() {
  return await prisma.home.findMany({
    where: {
      published: true,
    },
    select: {
      photo: true,
      id: true,
      price: true,
      description: true,
      location: true,
      User: {
        select: {
          firstName: true,
        },
      },
    },
  });
}

export default async function Home() {
  const listings = await getListings();
  return (
    <div className="container mx-auto space-y-6 px-5 lg:px-10">
      <MapFilterItems />
      <Separator />
      <div className="mt-4 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            location={listing.location as string}
            imageUrl={listing.photo as string}
            description={listing.description as string}
            price={listing.price as number}
            host={listing.User?.firstName as string}
          />
        ))}
      </div>
    </div>
  );
}
