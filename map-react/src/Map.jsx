import React, { useEffect, useState } from 'react';
import ReactMapboxGL from 'react-mapbox-gl';
import { SatelliteStreetToggleSubject } from 'container/channels';

const MapboxMap = ReactMapboxGL({
  accessToken: process.env.MAPBOX_ACCESS_TOKEN,
});

const Map = () => {
  const [mapStyle, setMapStyle] = useState('street');

  useEffect(() => {
    const subscription = SatelliteStreetToggleSubject.subscribe((newValue) => {
      setMapStyle(newValue);
    });

    return subscription.unsubscribe;
  }, []);

  return (
    <MapboxMap
      style={
        mapStyle === 'street'
          ? 'mapbox://styles/mapbox/streets-v9'
          : 'mapbox://styles/mapbox/satellite-v9'
      }
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
    />
  );
};

export default Map;
