import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import ErrorBoundary from './components/ErrorBundary/ErrorBundary';
import Web3ContextProvider from './providers/Web3Provider';
import './styles.css';

var mountNode = document.getElementById('app');
ReactDOM.render(
  <ErrorBoundary>
    <Web3ContextProvider>
      <App />
    </Web3ContextProvider>
  </ErrorBoundary>,
  mountNode
);
