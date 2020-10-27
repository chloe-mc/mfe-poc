import React from 'react';

const SatelliteStreetToggle = React.lazy(() => import('app_02/SatelliteStreetToggle'));

const LayersPage = () => (
  <React.Suspense fallback="Loading Satellite Street Toggle...">
    <SatelliteStreetToggle />
  </React.Suspense>
);

export default LayersPage;
