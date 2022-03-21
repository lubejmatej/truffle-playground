import * as React from 'react';
import { useEffect } from 'react';

import './App.css';
import Home from './pages/Home/Home';
import UserContactsContextProvider from './providers/UserContactsProvider';
import { Web3Context } from './providers/Web3Provider';

const App: React.FC = () => {
  const {
    state: { initialized },
    loadWeb3,
  } = React.useContext(Web3Context);

  useEffect(() => {
    loadWeb3();
  }, [loadWeb3]);

  const wrapper = React.useCallback(
    (wrapped: JSX.Element) => <div className="App">{wrapped}</div>,
    []
  );

  if (!initialized) {
    return wrapper(<h2>Please connect your Web3 wallet!</h2>);
  }

  return wrapper(
    <div className="App--container">
      <UserContactsContextProvider>
        <Home />
      </UserContactsContextProvider>
    </div>
  );
};

export default App;
