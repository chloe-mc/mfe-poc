import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';

import DialogPage from './apps/dialog-page';
import RoutingPage from './apps/routing-page';
import Docs from './apps/docs';
import UiLibraryPage from './apps/ui-library-page';

const Routes = () => (
  <Switch>
    <Route path="/layers" component={DialogPage} />
    <Route path="/docs" component={Docs} />
    <Route path="/posts" component={RoutingPage} />
    <Route path="/team" component={UiLibraryPage} />
    <Route path="/">
      <Redirect to="/layers" />
    </Route>
  </Switch>
);

export default Routes;
