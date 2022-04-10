import * as React from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ModalContextProvider from './providers/ModalProvider';
import Web3ContextProvider from './providers/Web3Provider';

import './styles.css';

const App = React.lazy(() => import('./App'));

const SuspenseComponent: React.FC = () => <>...</>;

createRoot(document.getElementById('app')!).render(
  <ErrorBoundary>
    <ModalContextProvider>
      <Web3ContextProvider>
        <React.Suspense fallback={<SuspenseComponent />}>
          <App />
        </React.Suspense>
      </Web3ContextProvider>
    </ModalContextProvider>
  </ErrorBoundary>
);
