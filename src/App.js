import React from 'react';
import GlobalStyle from 'style/GlobalStyle';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

// Component
import { Home, WorldCup, Ranking } from 'component/index';

// Router
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Route path="/" exact={true} component={Home} />
        <Route path="/world-cup/:id" exact={true} component={WorldCup} />
        <Route path="/ranking/:id" exact={true} component={Ranking} />
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
