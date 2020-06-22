import React from 'react';
import GlobalStyle from 'style/GlobalStyle';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

// Component
import { Home, WorldCup, Ranking, NotFound } from 'component/index';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/world-cup/:id" component={WorldCup} />
          <Route path="/ranking/:id" component={Ranking} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
