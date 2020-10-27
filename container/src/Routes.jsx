import { Redirect, Route, Switch } from "react-router-dom";
import React from "react";

import DialogPage from "./pages/dialog-page";
import RoutingPage from "./pages/routing-page";
import SveltePage from "./pages/svelte-page";
import UiLibraryPage from "./pages/ui-library-page";

const Routes = () => (
  <Switch>
    <Route path="/layers">
      <DialogPage />
    </Route>
    <Route path="/docs" component={SveltePage} />
    <Route path="/posts" component={RoutingPage} />
    <Route path="/team" component={UiLibraryPage} />
    <Route exact path="/">
      <Redirect to="/layers" />
    </Route>
  </Switch>
);

export default Routes;
