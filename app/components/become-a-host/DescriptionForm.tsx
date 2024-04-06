'use client';

import React from 'react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { Textarea } from '../ui/textarea';
import { Card, CardHeader } from '../ui/card';
import Counter from '../base/counter/Counter';
import { Bed, BedDoubleIcon, ShowerHeadIcon, Users2Icon } from 'lucide-react';

type Props = {};

export default function DescriptionForm({}: Props) {
  return (
    <div className="mx-auto space-y-4">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight transition-colors">
          {"Let's get the basics straight"}
        </h1>
        <h4 className="text-gray-500">We are sure it is great! You can add more details later.</h4>
      </div>

      <Separator />

      <div className="mt-12 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="title">Title</Label>
          <Input type="text" name="title" id="title" placeholder="Something catchy..." />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea name="description" id="description" placeholder="Something catchy..." />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            required
            type="number"
            name="price"
            id="price"
            placeholder="Price pr. night (USD)"
            min={10}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="image">Image</Label>
          <Input type="file" name="image" id="image" />
        </div>

        <Card>
          <CardHeader className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Users2Icon className="text-rose-500" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">Guests</h3>
                  <p className="text-muted-foreground text-sm">How many guests?</p>
                </div>
              </div>
              <Counter inputName="guests" />
            </div>
          </CardHeader>

          <CardHeader className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bed className="text-rose-500" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">Bedrooms</h3>
                  <p className="text-muted-foreground text-sm">How many bedrooms?</p>
                </div>
              </div>
              <Counter inputName="bedrooms" />
            </div>
          </CardHeader>

          <CardHeader className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Bed className="text-rose-500" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">Beds</h3>
                  <p className="text-muted-foreground text-sm">How many beds?</p>
                </div>
              </div>
              <Counter inputName="beds" />
            </div>
          </CardHeader>

          <CardHeader className="flex flex-col gap-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <ShowerHeadIcon className="text-rose-500" />
                <div className="flex flex-col">
                  <h3 className="font-semibold">Bathrooms</h3>
                  <p className="text-muted-foreground text-sm">How many bathrooms?</p>
                </div>
              </div>
              <Counter inputName="bathrooms" />
            </div>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
