import * as React from "../_snowpack/pkg/react.js";
import {ModalContext} from "../providers/ModalProvider.js";
import Utils from "../utils/utils.js";
const useModal = (component, data, onClose) => {
  const modalKey = React.useMemo(() => Utils.uniqueId("modal-"), []);
  const {showModal, hideModal} = React.useContext(ModalContext);
  const _showModal = React.useCallback((modalProps = {}) => showModal(modalKey, component, {...data, ...modalProps}, onClose), [showModal, modalKey, component, data, onClose]);
  const _hideModal = React.useCallback(() => hideModal(modalKey, onClose), [hideModal, onClose, modalKey]);
  return [_showModal, _hideModal];
};
export default useModal;
