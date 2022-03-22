import * as React from 'react';

import './Modal.css';

interface ModalProps {
  maxWidth?: string | number;
}

const Modal: React.FC<ModalProps> = ({ children, maxWidth }) => {
  return (
    <>
      <div className="Modal--backdrop" />
      <div className="Modal" style={{ maxWidth }}>
        {children}
      </div>
    </>
  );
};

export default Modal;
