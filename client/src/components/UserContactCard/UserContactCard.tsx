import * as React from 'react';
import { useContext } from 'react';

import {
  UserContact,
  UserContactsContext,
} from '../../providers/UserContactsProvider';
import Button from '../Button/Button';
import './UserContactCard.css';

const UserContactCard: React.FC<{ userContact: UserContact }> = ({
  userContact,
}) => {
  const { createUserContact, updateUserContact, deleteUserContact } =
    useContext(UserContactsContext);
  const { id, firstName, lastName, age } = userContact;

  return (
    <div className="UserContactCard">
      <div className="UserContactCard--start">
        <div className="UserContactCard--name">
          {firstName} {lastName}
        </div>
        <div className="UserContactCard--age">{age} Year/s old</div>
      </div>
      <div className="UserContactCard--end">
        <div className="UserContactCard--actions">
          <Button onClick={() => createUserContact(userContact)}>
            Duplicate
          </Button>
          <Button
            onClick={() => {
              updateUserContact({
                ...userContact,
                firstName: `${firstName}u`,
              });
            }}
          >
            Update
          </Button>
          <Button onClick={() => deleteUserContact(id)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserContactCard);
