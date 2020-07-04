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

// Apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
  uri: 'http://localhost:4002/graphql',
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          <Router />
        </ThemeProvider>
      </ReduxProvider>
    </ApolloProvider>
  );
};

export default App;
