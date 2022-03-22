import React from 'react';

import { ModalPropsBase } from '../../providers/ModalProvider';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import './ConfirmModal.css';

export interface ConfirmModalInput {
  title: string | JSX.Element;
}

export interface ConfirmModalOutput {
  confirm: boolean;
}

const ConfirmModal: React.FC<ConfirmModalInput & ModalPropsBase> = ({
  title,
  onClose,
}) => {
  return (
    <Modal maxWidth={650}>
      <div className="ConfirmModal--header">{title}</div>
      <div className="ConfirmModal--footer">
        <Button onClick={() => onClose({ confirm: false })}>Cancel</Button>
        <Button variant="secondary" onClick={() => onClose({ confirm: true })}>
          Ok
        </Button>
      </div>
    </Modal>
  );
};

export default React.memo(ConfirmModal);
