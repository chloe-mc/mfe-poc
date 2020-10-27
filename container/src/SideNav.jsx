import {
  Drawer,
  Paper,
  Tabs,
  Tab,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import LayersIcon from '@material-ui/icons/Layers';
import DocsIcon from '@material-ui/icons/LibraryBooks';
import PostsIcon from '@material-ui/icons/Place';
import TeamIcon from '@material-ui/icons/People';

import { Link } from "react-router-dom";
import React from "react";

import Routes from "./Routes";

const drawerWidth = 250;

const useStyles = makeStyles((theme) =>
  createStyles({
    drawer: {
      flex: 1
    }
  })
);

export default function SideNav() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      anchor="left"
    >
      <Paper square>
        <Tabs
          indicatorColor="secondary"
          onChange={handleChange}
          textColor="secondary"
          value={value}
          variant="fullWidth"
        >
          <Tab icon={<LayersIcon />} label="LAYERS" component={Link} to="/layers" />
          <Tab icon={<DocsIcon />} label="DOCS" component={Link} to="/docs"/>
          <Tab icon={<PostsIcon />} label="POSTS" component={Link} to="/posts"/>
          <Tab icon={<TeamIcon />} label="TEAM" component={Link} to="/team"/>
        </Tabs>
      </Paper>
      <Routes />
    </Drawer>
  );
}
