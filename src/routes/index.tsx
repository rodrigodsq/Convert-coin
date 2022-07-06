import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Home} />
    <Route render={() => <Redirect to="/" />} />
  </Switch>
);

export default Routes;
