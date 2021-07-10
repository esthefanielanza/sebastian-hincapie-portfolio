import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import { About, Case, Home } from 'pages';
import { Nav, Footer } from 'components';

import {
  ABOUT, CASE, HOME, NAV_LINKS,
} from './constants';

const Routing = () => (
  <Router>
    <Nav links={NAV_LINKS} />

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

    <Footer />
  </Router>
);

export default Routing;
