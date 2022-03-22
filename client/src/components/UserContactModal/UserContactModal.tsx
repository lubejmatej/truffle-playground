import * as React from 'react';

import useForm from '../../hooks/useForm';
import { ModalPropsBase } from '../../providers/ModalProvider';
import { UserContact } from '../../providers/UserContactsProvider';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './UserContactModal.css';

export interface UserContactModalInput {
  title: string | JSX.Element;
  type: UserContactType;
  userContact?: UserContact;
}

export interface UserContactModalOutput {
  confirm: boolean;
  type?: UserContactType;
  userContact?: UserContact | Omit<UserContact, 'id'>;
}

export enum UserContactType {
  CREATE,
  UPDATE,
}

const userContactInitialValue: UserContact = {
  id: null,
  firstName: '',
  lastName: '',
  telNumber: '',
  email: '',
  age: null,
  avatarUrl: '',
  websiteUrl: '',
  tags: '',
};

const UserContactModal: React.FC<
  UserContactModalInput & ModalPropsBase<UserContactModalOutput>
> = ({
  title,
  type,
  userContact = { ...userContactInitialValue },
  onClose,
}) => {
  const isUpdateMode = React.useMemo(
    () => type === UserContactType.UPDATE,
    [type]
  );
  const onSubmit = React.useCallback(
    (formData) => {
      onClose?.({
        userContact: formData,
        type,
        confirm: true,
      });
    },
    [onClose, type]
  );
  const { inputs, handleInputChange, handleSubmit } = useForm<UserContact>(
    userContact,
    onSubmit
  );

  const renderInput = React.useCallback(
    (name: keyof UserContact, disabled = false) => (
      <input
        type="text"
        placeholder={name}
        name={name}
        value={inputs[name]}
        onChange={handleInputChange}
        disabled={disabled}
      />
    ),
    [inputs, handleInputChange]
  );

  return (
    <Modal maxWidth={600}>
      <div className="UserContactModal--header">{title}</div>
      <div className="UserContactModal--content">
        <form onSubmit={handleSubmit}>
          {isUpdateMode && renderInput('id', true)}
          {renderInput('firstName')}
          {renderInput('lastName')}
          {renderInput('telNumber')}
          {renderInput('email')}
          {renderInput('age')}
          {renderInput('avatarUrl')}
          {renderInput('websiteUrl')}
          {renderInput('tags')}
        </form>
      </div>
      <div className="UserContactModal--footer">
        <Button onClick={() => onClose({ confirm: false })}>Cancel</Button>
        <Button variant="secondary" onClick={handleSubmit}>
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default React.memo(UserContactModal);
