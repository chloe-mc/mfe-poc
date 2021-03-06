import { CssBaseline, createStyles, makeStyles } from '@material-ui/core';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import SideNav from './SideNav';

const Map = React.lazy(() => import('map_react/Map'));

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

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.sideBar}>
          <SideNav />
        </div>
        <div className={classes.map}>
          <React.Suspense fallback="Loading map..." >
            <Map />
          </React.Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
