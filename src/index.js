import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import 'gestalt/dist/gestalt.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const client = new ApolloClient({
  uri: 'https://movie-database-graphql-jaogdcftbn.now.sh/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
registerServiceWorker();
