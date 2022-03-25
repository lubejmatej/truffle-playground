import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ErrorBoundary from './components/ErrorBundary/ErrorBundary';
import ModalContextProvider from './providers/ModalProvider';
import Web3ContextProvider from './providers/Web3Provider';

import './styles.css';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <ErrorBoundary>
    <ModalContextProvider>
      <Web3ContextProvider>
        <React.Suspense fallback={() => <>...</>}>
          <App />
        </React.Suspense>
      </Web3ContextProvider>
    </ModalContextProvider>
  </ErrorBoundary>,
  document.getElementById('app')
);
