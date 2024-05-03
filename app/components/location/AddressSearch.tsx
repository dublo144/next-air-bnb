import React from 'react';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '../ui/command';
import { Separator } from '@/components/ui/separator';
import { Location } from '@/components/become-a-host/LocationForm';

type Props = {};

export default function AddressSearch({
  onSelectAddress,
}: {
  onSelectAddress: (location: Location) => void;
}) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, cache: 86400 });

  return (
    <Command className="border-2 p-2">
      <CommandInput
        value={value}
        disabled={!ready}
        onValueChange={setValue}
        placeholder="Enter your address"
      />
      <CommandList>
        {status === 'OK' && (
          <>
            <CommandEmpty>No results found.</CommandEmpty>
            <>
              <Separator className="mb-2" />
              {data.map(({ place_id, description }) => (
                <CommandItem
                  key={place_id}
                  value={description}
                  onSelect={(value: string) => {
                    setValue(value, false); // Set the value to the address, but dont refetch
                    clearSuggestions();
                    onSelectAddress({ fullAddress: description, placeId: place_id });
                  }}
                >
                  {description}
                </CommandItem>
              ))}
            </>
          </>
        )}
      </CommandList>
    </Command>
  );
}
