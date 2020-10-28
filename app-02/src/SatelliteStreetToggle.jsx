import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { SatelliteStreetToggleSubject } from 'container/channels';

const SatelliteStreetToggle = () => {
  const [toggleValue, setToggleValue] = React.useState('street');

  const handleToggle = (_, newValue) => {
    SatelliteStreetToggleSubject.next(newValue);
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
