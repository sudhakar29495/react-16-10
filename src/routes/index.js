import React from 'react';
import Home from "../pages/Home";
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../pages/Dashboard/dashboard';

const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      exact: true,
      component: Home
    },
    {
      path: '/dashboard',
      exact: true,
      component: Dashboard
    }
  ];
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          exact={route.exact}
          key={index}
          render={(props) => <route.component {...props} />}
        />
      ))}
    </Switch>
  );
};

export default AppRoutes;