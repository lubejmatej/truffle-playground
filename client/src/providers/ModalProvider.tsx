import * as React from 'react';

export interface ModalPropsBase<R = {}> {
  isOpen: boolean;
  onClose: (returnValue?: R) => void;
}

interface ModalProviderState {
  [modalKey: string]: {
    isOpen: boolean;
    component: React.JSXElementConstructor<ModalPropsBase>;
    props: ModalPropsBase;
    onClose?: (returnValue?: any) => void;
  };
}

interface ModalProviderContext {
  readonly state: ModalProviderState;
  showModal: (
    modalKey: string,
    component: React.JSXElementConstructor<any>,
    modalData: any,
    closeModal?: (returnValue?: any) => void
  ) => void;
  hideModal: (
    modalKey: string,
    closeModal?: (returnValue?: any) => void
  ) => void;
}

const modalProviderInitialState: ModalProviderState = {};

export const ModalContext = React.createContext<ModalProviderContext>(
  {} as ModalProviderContext
);

const ModalContextProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, setState] = React.useState<ModalProviderState>({
    ...modalProviderInitialState,
  });

  const showModal: ModalProviderContext['showModal'] = React.useCallback(
    (modalKey, component, props, onClose) => {
      setState((state) => ({
        ...state,
        [modalKey]: {
          isOpen: true,
          component,
          props,
          onClose,
        },
      }));
    },
    [setState]
  );

  const hideModal: ModalProviderContext['hideModal'] = React.useCallback(
    (modalKey, closeModal) => {
      if (typeof closeModal === 'function') {
        closeModal();
      }

      setState((state) => {
        const stateCopy = { ...state };
        delete stateCopy[modalKey];

        return stateCopy;
      });
    },
    [setState]
  );

  const providerState: ModalProviderContext = React.useMemo(
    () => ({
      state,
      showModal,
      hideModal,
    }),
    [state, showModal, hideModal]
  );

  const modals = React.useMemo(() => {
    const modalsKeys = Object.keys(state);

    return (
      <>
        {modalsKeys.map((modalKey) => {
          const {
            component: Component,
            isOpen,
            props,
            onClose,
          } = state[modalKey];

          return (
            isOpen && (
              <Component
                {...props}
                onClose={(returnValue) => {
                  hideModal(modalKey, () => onClose?.(returnValue));
                }}
                key={modalKey}
                isOpen={isOpen}
              />
            )
          );
        })}
      </>
    );
  }, [state, hideModal]);

  return (
    <ModalContext.Provider value={providerState}>
      {children}
      {modals}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
