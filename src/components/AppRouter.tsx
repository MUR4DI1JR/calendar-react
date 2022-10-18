import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {RouteNames} from './../router/index';

const AppRouter = () => {
  const auth = false;
  return (
    auth ?
      <Switch>
        {
          privateRoutes.map(route =>
            <Route path={route.path}
                   component={route.component}
                   exact={route.exact}
                   key={route.path}
            />
          )
        }
        <Redirect to={RouteNames.EVENT}/>
      </Switch>
      :
      <Switch>
        {
          publicRoutes.map(route =>
            <Route path={route.path}
                   component={route.component}
                   exact={route.exact}
                   key={route.path}
            />
          )
        }
        <Redirect to={RouteNames.LOGIN}/>
      </Switch>
  );
};

export default AppRouter;