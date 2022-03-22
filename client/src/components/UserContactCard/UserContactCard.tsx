import * as React from 'react';

import useModal from '../../hooks/use-modal';
import {
  UserContact,
  UserContactsContext,
} from '../../providers/UserContactsProvider';
import Button from '../Button/Button';
import ConfirmModal, {
  ConfirmModalInput,
  ConfirmModalOutput,
} from '../ConfirmModal/ConfirmModal';
import './UserContactCard.css';

const UserContactCard: React.FC<{ userContact: UserContact }> = ({
  userContact,
}) => {
  const { id, firstName, lastName, age } = userContact;

  const { createUserContact, updateUserContact, deleteUserContact } =
    React.useContext(UserContactsContext);

  const confirmModalTitle = React.useMemo(
    () => (
      <>
        Are you sure you want to delete this contact {firstName} {lastName}?
        <br />
        This action cannot be undone!
      </>
    ),
    [firstName, lastName]
  );
  const [showModal] = useModal<ConfirmModalInput, ConfirmModalOutput>(
    ConfirmModal,
    {
      title: confirmModalTitle,
    },
    (modalResponse) => {
      const { confirm } = modalResponse!;
      if (confirm) {
        deleteUserContact(id);
      }
    }
  );

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
          <Button onClick={() => showModal()}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserContactCard);
