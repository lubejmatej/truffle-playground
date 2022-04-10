import * as React from "../_snowpack/pkg/react.js";
const modalProviderInitialState = {};
export const ModalContext = React.createContext({});
const ModalContextProvider = ({
  children
}) => {
  const [state, setState] = React.useState({
    ...modalProviderInitialState
  });
  const showModal = React.useCallback((modalKey, component, props, onClose) => {
    setState((state2) => ({
      ...state2,
      [modalKey]: {
        isOpen: true,
        component,
        props,
        onClose
      }
    }));
  }, [setState]);
  const hideModal = React.useCallback((modalKey, closeModal) => {
    if (typeof closeModal === "function") {
      closeModal();
    }
    setState((state2) => {
      const stateCopy = {...state2};
      delete stateCopy[modalKey];
      return stateCopy;
    });
  }, [setState]);
  const providerState = React.useMemo(() => ({
    state,
    showModal,
    hideModal
  }), [state, showModal, hideModal]);
  const modals = React.useMemo(() => {
    const modalsKeys = Object.keys(state);
    return /* @__PURE__ */ React.createElement(React.Fragment, null, modalsKeys.map((modalKey) => {
      const {
        component: Component,
        isOpen,
        props,
        onClose
      } = state[modalKey];
      return isOpen && /* @__PURE__ */ React.createElement(Component, {
        ...props,
        onClose: (returnValue) => {
          hideModal(modalKey, () => onClose?.(returnValue));
        },
        key: modalKey,
        isOpen
      });
    }));
  }, [state, hideModal]);
  return /* @__PURE__ */ React.createElement(ModalContext.Provider, {
    value: providerState
  }, children, modals);
};
export default ModalContextProvider;
