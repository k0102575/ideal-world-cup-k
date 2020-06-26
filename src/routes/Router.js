import React from 'react';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from 'routes/routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, index) => {
          return <Route key={index} {...route} />;
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
