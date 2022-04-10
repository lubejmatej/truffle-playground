import * as React from 'react';

import UserContactList from '../../components/UserContactList/UserContactList';
import { UserContactsContext } from '../../providers/UserContactsProvider';
import { Web3Context } from '../../providers/Web3Provider';

import './Home.css';

const Home: React.FC = () => {
  const {
    state: { initialized },
  } = React.useContext(Web3Context);
  const { loadUserContacts } = React.useContext(UserContactsContext);

  React.useEffect(() => {
    if (initialized) {
      loadUserContacts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialized]);

  return (
    <div className="Home">
      <h1>Hello Truffle playground</h1>

      <UserContactList />
    </div>
  );
};

export default Home;
