import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { About, Case, Home } from 'pages';
import { Nav, Footer, Page } from 'components';
import ScrollTop from './ScrollTop';

import {
  ABOUT, CASE, HOME, NAV_LINKS,
} from './constants';

const Routing = () => (
  <Router>
    <ScrollTop />
    <Nav links={NAV_LINKS} />

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
