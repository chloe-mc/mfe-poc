import ReactMapboxGL from 'react-mapbox-gl';
import { CssBaseline, createStyles, makeStyles } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import SideNav from './SideNav';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    sideBar: {
      flex: 1,
    },
    map: {
      flex: 2,
      textAlign: 'center',
    },
  })
);

const Map = ReactMapboxGL({
  accessToken: process.env.MAPBOX_API_TOKEN,
});

function App() {
  const classes = useStyles();

  const style = 'street';

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.sideBar}>
          <SideNav />
        </div>
        <div className={classes.map}>
          <Map
            style={
              style === 'street'
                ? 'mapbox://styles/mapbox/streets-v9'
                : 'mapbox://styles/mapbox/satellite-v9'
            }
            containerStyle={{
              height: '100vh',
              width: '100vw',
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
