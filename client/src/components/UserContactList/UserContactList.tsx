import * as React from 'react';

import useModal from '../../hooks/useModal';
import {
  UserContact,
  UserContactsContext,
} from '../../providers/UserContactsProvider';
import Button from '../Button/Button';
import UserContactCard from '../UserContactCard/UserContactCard';
import UserContactModal, {
  UserContactModalInput,
  UserContactModalOutput,
  UserContactType,
} from '../UserContactModal/UserContactModal';
import './UserContactList.css';

const UserContactList: React.FC = () => {
  const {
    state: { userContacts },
    createUserContact,
  } = React.useContext(UserContactsContext);

  const [showUserContactCreateModal] = useModal<
    UserContactModalInput,
    UserContactModalOutput
  >(
    UserContactModal,
    {},
    React.useCallback(
      (modalResponse) => {
        const { confirm, userContact } = modalResponse!;
        if (!confirm) {
          return;
        }
        createUserContact(userContact as Omit<UserContact, 'id'>);
      },
      [createUserContact]
    )
  );

  return (
    <div className="UserContactList">
      <div className="UserContactList--header">
        <Button
          outline={true}
          onClick={() =>
            showUserContactCreateModal({
              title: 'Create user contact',
              type: UserContactType.CREATE,
            })
          }
        >
          Create contact
        </Button>
      </div>
      {userContacts.map((userContact) => (
        <UserContactCard key={userContact.id} userContact={userContact} />
      ))}
    </div>
  );
};

export default UserContactList;
