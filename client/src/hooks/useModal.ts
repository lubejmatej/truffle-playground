import * as React from 'react';

import { ModalContext, ModalPropsBase } from '../providers/ModalProvider';
import Utils from '../utils/utils';

type useModalReturnType<P, R> = [
  (modalProps?: Partial<P>) => void,
  (returnValue?: R) => void
];

const useModal = <P = ModalPropsBase, R = any>(
  component: React.JSXElementConstructor<P & ModalPropsBase>,
  data?: Partial<P>,
  onClose?: (returnValue?: R) => void
): useModalReturnType<P, R> => {
  // Insure modalKey won't change in subsequent renders
  const modalKey = React.useMemo(() => Utils.uniqueId('modal-'), []);
  const { showModal, hideModal } = React.useContext(ModalContext);

  const _showModal = React.useCallback(
    (modalProps: Partial<P> = {}) =>
      showModal(modalKey, component, { ...data, ...modalProps }, onClose),
    [showModal, modalKey, component, data, onClose]
  );
  const _hideModal = React.useCallback(
    () => hideModal(modalKey, onClose),
    [hideModal, onClose, modalKey]
  );

  return [_showModal, _hideModal];
};

export default useModal;
