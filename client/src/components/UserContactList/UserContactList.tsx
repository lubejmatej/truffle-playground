import * as React from 'react';

import { UserContactsContext } from '../../providers/UserContactsProvider';
import UserContactCard from '../UserContactCard/UserContactCard';
import './UserContactList.css';

const UserContactList: React.FC = () => {
  const {
    state: { userContacts },
  } = React.useContext(UserContactsContext);

  return (
    <div className="UserContactList">
      {userContacts.map((userContact) => (
        <UserContactCard key={userContact.id} userContact={userContact} />
      ))}
    </div>
  );
};

export default UserContactList;
