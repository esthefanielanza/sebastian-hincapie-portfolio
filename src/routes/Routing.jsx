import React from 'react';

import { About, Case, Home } from 'pages';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ABOUT, CASE, HOME } from './constantes';

const Routing = () => (
  <Router>
    <nav>Navigation</nav>

    <Switch>
      <Route path={ABOUT}>
        <About />
      </Route>

      <Route path={CASE}>
        <Case />
      </Route>

      <Route path={HOME}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default Routing;
