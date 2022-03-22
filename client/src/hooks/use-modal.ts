import * as React from 'react';
import { JSXElementConstructor } from 'react';

import { ModalContext, ModalPropsBase } from '../providers/ModalProvider';
import { Utils } from '../utils/utils';

type useModalReturnType<P, R> = [
  (modalProps?: Partial<P>) => void,
  (returnValue?: R) => void
];

const useModal = <P = ModalPropsBase, R = any>(
  component: JSXElementConstructor<P & ModalPropsBase>,
  data?: P,
  onClose?: (returnValue?: R) => void
): useModalReturnType<P, R> => {
  // Unsure modalKey won't change in subsequent renders
  const modalKey = React.useMemo(() => Utils.uniqueId('modal-'), []);
  const { showModal, hideModal } = React.useContext(ModalContext);

  const _showModal = React.useCallback(
    (modalProps: Partial<P> = {}) =>
      showModal(modalKey, component, { ...data, ...modalProps }, onClose),
    [data, showModal]
  );
  const _hideModal = React.useCallback(
    () => hideModal(modalKey, onClose),
    [hideModal, onClose, modalKey]
  );

  return [_showModal, _hideModal];
};

export default useModal;
