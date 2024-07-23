import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';


import {Home, Login, Register, Products, Cart, Admin} from '../containers';
import PrivateRoute from './private-route';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
        <PrivateRoute component={Admin} path="/pedidos" isAdmin/>

        <PrivateRoute exect component={Home} path="/" />

      </Switch>
    </Router>
  )
}

export default Routes