import React from 'react';
import GlobalStyle from 'style/GlobalStyle';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './redux/store';

// Component
import Count from 'component/Count';

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <Count />
    </ReduxProvider>
  );
}

export default App;
