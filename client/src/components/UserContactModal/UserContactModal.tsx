import * as React from 'react';

import useForm, { FormDefaults } from '../../hooks/useForm';
import { ModalPropsBase } from '../../providers/ModalProvider';
import { UserContact } from '../../providers/UserContactsProvider';
import Utils from '../../utils/utils';
import ValidatorUtils from '../../utils/validator.utils';
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

const userContactInitialValue: FormDefaults<UserContact> = {
  id: '',
  firstName: '',
  lastName: '',
  telNumber: '',
  email: '',
  age: '',
  avatarUrl: '',
  websiteUrl: '',
  tags: '',
};

type InputPropsType = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

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

  const renderFormGroup = React.useCallback(
    ({
      name,
      disabled,
      type,
      ...rest
    }: {
      name: keyof UserContact;
      disabled?: boolean;
    } & Partial<InputPropsType>) => (
      <div className="form-group">
        <label htmlFor={name}>{Utils.camelCaseToString(name)}</label>
        <input
          id={name}
          type={type ?? 'text'}
          name={name}
          value={inputs[name]}
          onChange={handleInputChange}
          disabled={disabled ?? false}
          required={true}
          {...rest}
        />
      </div>
    ),
    [inputs, handleInputChange]
  );

  return (
    <Modal maxWidth={600}>
      <form onSubmit={handleSubmit}>
        <div className="UserContactModal--header">{title}</div>
        <div className="UserContactModal--content">
          {isUpdateMode && renderFormGroup({ name: 'id', disabled: true })}
          {renderFormGroup({ name: 'firstName' })}
          {renderFormGroup({ name: 'lastName' })}
          {renderFormGroup({
            name: 'telNumber',
            type: 'tel',
            pattern: ValidatorUtils.TelNumberReg(),
          })}
          {renderFormGroup({ name: 'email', type: 'email' })}
          {renderFormGroup({ name: 'age', type: 'number', min: 0 })}
          {renderFormGroup({
            name: 'avatarUrl',
            pattern: ValidatorUtils.UrlReg(),
          })}
          {renderFormGroup({
            name: 'websiteUrl',
            pattern: ValidatorUtils.UrlReg(),
          })}
          {renderFormGroup({ name: 'tags' })}
        </div>
        <div className="UserContactModal--footer">
          <Button onClick={() => onClose({ confirm: false })}>Cancel</Button>
          <Button type="submit" variant="secondary">
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default React.memo(UserContactModal);
