import { Drawer, Paper, Tabs, Tab, createStyles, makeStyles } from '@material-ui/core';
import LayersIcon from '@material-ui/icons/Layers';
import DocsIcon from '@material-ui/icons/LibraryBooks';
import PostsIcon from '@material-ui/icons/Place';
import TeamIcon from '@material-ui/icons/People';

import { Link, useLocation } from 'react-router-dom';
import React from 'react';

import Routes from './Routes';

const drawerWidth = 250;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      flex: 1,
    },
  })
);

export default function SideNav() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const pathLocation = useLocation();
  const currentTab = pathLocation.pathname.split('/')[1];

  return (
    <Drawer className={classes.drawer} variant="permanent" anchor="left">
      <Paper square>
        <Tabs
          indicatorColor="secondary"
          onChange={handleChange}
          textColor="secondary"
          value={currentTab}
          variant="fullWidth"
        >
          <Tab icon={<LayersIcon />} label="LAYERS" component={Link} value="layers" to="/layers" />
          <Tab icon={<DocsIcon />} label="DOCS" component={Link} value="docs" to="/docs" />
          <Tab icon={<PostsIcon />} label="POSTS" component={Link} value="posts" to="/posts" />
          <Tab icon={<TeamIcon />} label="TEAM" component={Link} value="team" to="/team" />
        </Tabs>
      </Paper>
      <Routes />
    </Drawer>
  );
}
