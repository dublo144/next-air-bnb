'use client';

import React, { useMemo, useState } from 'react';
import { useLoadScript, GoogleMap, OverlayView } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import MapMarker from '@/app/components/location/MapMarker';
import AddressSearch from '@/app/components/location/AddressSearch';

type Props = {};

export default function LocationForm({}: Props) {
  const libraries = useMemo(() => ['places'], []);

  const [lat, setLat] = useState(55.675903);
  const [lng, setLng] = useState(12.568995);
  const mapCenter = useMemo(() => ({ lat, lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
      gestureHandling: 'none',
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  const onSelectAddress = (address: string) => {
    getGeocode({ address }).then((results) => {
      const { lat, lng } = getLatLng(results[0]);
      setLat(lat);
      setLng(lng);
    });
  };

  return (
    <div className="mx-auto">
      <h1 className="mb-4 text-3xl font-bold tracking-tight transition-colors">
        Where is your home located?
      </h1>

      <div className="relative h-full">
        <div className="absolute left-1/2 top-8 z-10 w-4/5 -translate-x-1/2 shadow-lg">
          <AddressSearch onSelectAddress={onSelectAddress} />
        </div>
        <GoogleMap
          mapContainerClassName="rounded-lg max-w-full select-none"
          options={mapOptions}
          zoom={16}
          center={mapCenter}
          mapTypeId={google.maps.MapTypeId.ROADMAP}
          mapContainerStyle={{ width: '100%', height: '65vh' }}
        >
          <OverlayView position={mapCenter} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
            <MapMarker />
          </OverlayView>
        </GoogleMap>
      </div>
    </div>
  );
}
