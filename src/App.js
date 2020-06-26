import React from 'react';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

// Component
import { Header, Home, WorldCup, Ranking, NotFound } from 'component/index';

// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Style
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import GlobalStyle from 'style/GlobalStyle';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
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
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
