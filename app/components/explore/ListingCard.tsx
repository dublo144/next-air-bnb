import { Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import currency from 'currency.js';
import { Skeleton } from '../ui/skeleton';

type Props = {
  imageUrl: string;
  location: string;
  description: string;
  price: number;
  host: string;
};

export default function ListingCard({ imageUrl, location, description, price, host }: Props) {
  return (
    <div className="flex flex-col">
      <div className="relative mb-4 h-72">
        <Image
          src={`https://rpltohtakdadswhekgzu.supabase.co/storage/v1/object/public/images/${imageUrl}`}
          alt="image"
          fill
          className="mb-3 h-full rounded-lg object-cover"
        />
      </div>

      <div className="flex justify-between">
        <h1 className="font-semibold">{location}</h1>
        <div className="flex items-center space-x-1">
          <Star size={16} className="fill-rose-500 text-rose-500" />
          <span>5,0</span>
        </div>
      </div>

      <span className="text-muted-foreground">{`Host: ${host}`}</span>

      <div className="line-clamp-3 text-muted-foreground">{description}</div>

      <div className="space-x-1">
        <span className="font-bold">{currency(price).format()}</span>
        <span>/ night</span>
      </div>
    </div>
  );
}

export function LoadingSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="relative mb-4 h-72" />
      <div className="flex justify-between">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
}
