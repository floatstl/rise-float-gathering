import React from 'react';
import { Router, Route } from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import NotFound from './components/NotFound';

let Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/speakers" component={Speakers} />
    <Route path="/schedule" component={Schedule} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
