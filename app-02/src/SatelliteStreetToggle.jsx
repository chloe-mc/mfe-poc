import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';

import React from 'react';

const SatelliteStreetToggle = () => {
  const [toggleValue, setToggleValue] = React.useState('street');

  const handleToggle = (_, newValue) => {
    setToggleValue(newValue);
  };

  return (
    <div>
      <ToggleButtonGroup exclusive value={toggleValue} onChange={handleToggle}>
        <ToggleButton value="street">Street</ToggleButton>
        <ToggleButton value="satellite">Satellite</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

export default SatelliteStreetToggle;
