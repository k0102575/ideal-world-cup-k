import React from 'react';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from 'redux/store';

// Component
import { Header } from 'component/index';

// Router
import Router from 'routes/Router';

// Style
import { ThemeProvider } from 'styled-components';
import theme from 'style/theme';
import GlobalStyle from 'style/GlobalStyle';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Router />
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default App;
