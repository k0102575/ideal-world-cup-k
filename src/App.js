import React from 'react';
import GlobalStyle from 'style/GlobalStyle';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

// Component
import { Home, WorldCup, Ranking, NotFound } from 'component/index';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/world-cup/:id">
            <WorldCup />
          </Route>
          <Route path="/ranking/:id">
            <Ranking />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default App;
