import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';


import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Products from '../containers/Products';
import PrivateRoute from './private-route';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exect component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
      </Switch>
    </Router>
  )
}

export default Routes