import React from 'react';

import { About, Case, Home } from 'pages';
import { Footer, Page } from 'components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { ABOUT, CASE, HOME } from './constants';

const Routing = () => (
  <Router>
    <nav>Navigation</nav>

    <Page>
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
    </Page>

    <Footer />
  </Router>
);

export default Routing;
