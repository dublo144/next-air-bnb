import React from 'react';
import { Separator } from '../ui/separator';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

type Props = {};

export default function LocationForm({}: Props) {
  return (
    <div className="mx-auto space-y-4">
      <div>
        <h1 className="mb-2 text-3xl font-bold tracking-tight transition-colors">
          Where is your home located?
        </h1>
      </div>

      <Separator />

      <div className="mt-12 flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="location">Location</Label>
          <Input type="text" name="location" id="location" placeholder="Something catchy..." />
        </div>
      </div>
    </div>
  );
}
