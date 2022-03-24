import * as React from 'react';

import useModal from '../../hooks/useModal';
import {
  UserContact,
  UserContactsContext,
} from '../../providers/UserContactsProvider';
import Button from '../Button/Button';
import ConfirmModal, {
  ConfirmModalInput,
  ConfirmModalOutput,
} from '../ConfirmModal/ConfirmModal';
import UserContactModal, {
  UserContactModalInput,
  UserContactModalOutput,
  UserContactType,
} from '../UserContactModal/UserContactModal';

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
  const confirmModalCb = React.useCallback(
    (modalResponse) => {
      const { confirm } = modalResponse!;
      if (confirm) {
        deleteUserContact(id);
      }
    },
    [id, deleteUserContact]
  );
  const [showDeleteConfirmationModal] = useModal<
    ConfirmModalInput,
    ConfirmModalOutput
  >(
    ConfirmModal,
    {
      title: confirmModalTitle,
    },
    confirmModalCb
  );

  const updateUserContactModalCb = React.useCallback(
    (modalResponse) => {
      const { confirm, userContact } = modalResponse!;
      if (!confirm) {
        return;
      }
      updateUserContact(userContact as UserContact);
    },
    [updateUserContact]
  );
  const [showUserContactUpdateModal] = useModal<
    UserContactModalInput,
    UserContactModalOutput
  >(UserContactModal, {}, updateUserContactModalCb);

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
            onClick={() =>
              showUserContactUpdateModal({
                title: 'Update user contact',
                type: UserContactType.UPDATE,
                userContact,
              })
            }
          >
            Update
          </Button>
          <Button onClick={() => showDeleteConfirmationModal()}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserContactCard);
