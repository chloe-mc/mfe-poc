import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import LayersPage from './apps/layers-page';
import Posts from './apps/posts';
import Docs from './apps/docs';
import UiLibraryPage from './apps/ui-library-page';

const Routes = () => (
  <Switch>
    <Route path="/layers" component={LayersPage} />
    <Route path="/docs" component={Docs} />
    <Route path="/posts" component={Posts} />
    <Route path="/team" component={UiLibraryPage} />
    <Route path="/">
      <Redirect to="/layers" />
    </Route>
  </Switch>
);

export default Routes;
