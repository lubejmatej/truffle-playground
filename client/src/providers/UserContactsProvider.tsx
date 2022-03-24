import * as React from 'react';

import Utils from '../utils/utils';
import { Web3Context } from './Web3Provider';

export interface UserContact {
  id: number;
  firstName: string;
  lastName: string;
  telNumber: string;
  email: string;
  age: number;
  avatarUrl: string;
  websiteUrl: string;
  tags: string;
}

interface UserContactsProviderState {
  isLoading: boolean;
  userContacts: UserContact[];
}

interface UserContactsProviderContext {
  readonly state: UserContactsProviderState;
  loadUserContacts: () => void;
  createUserContact: (userContact: Omit<UserContact, 'id'>) => void;
  updateUserContact: (userContact: UserContact) => void;
  deleteUserContact: (id: number) => void;
}

const userContactsProviderInitialState: UserContactsProviderState = {
  isLoading: false,
  userContacts: [],
};

export const UserContactsContext =
  React.createContext<UserContactsProviderContext>(
    {} as UserContactsProviderContext
  );

const UserContactsContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<UserContactsProviderState>({
    ...userContactsProviderInitialState,
  });

  const {
    state: { contract, initialized, accounts },
  } = React.useContext(Web3Context);

  const loadUserContacts: UserContactsProviderContext['loadUserContacts'] =
    React.useCallback(async () => {
      if (!initialized || !contract) {
        return;
      }

      setState((state) => ({
        ...state,
        isLoading: true,
      }));

      const length: number = await contract.methods.userContactCount().call();
      const userContacts = await Promise.all(
        Array.from({ length }).map((_, i) =>
          contract.methods.userContacts(i + 1).call()
        )
      );

      setState((state) => ({
        ...state,
        userContacts: userContacts.filter(({ id }) => id > 0),
        isLoading: false,
      }));
    }, [initialized, contract, setState]);

  const createUserContact: UserContactsProviderContext['createUserContact'] =
    React.useCallback(
      async (userContact: Omit<UserContact, 'id'>) => {
        if (!initialized || !contract || !accounts?.length) {
          return;
        }

        setState((state) => ({
          ...state,
          isLoading: true,
        }));

        const [firstAccount] = accounts;
        const {
          firstName,
          lastName,
          telNumber,
          email,
          age,
          avatarUrl,
          websiteUrl,
          tags,
        } = userContact;

        await contract.methods
          .createUserContact(
            firstName,
            lastName,
            telNumber,
            email,
            age,
            avatarUrl,
            websiteUrl,
            tags
          )
          .send({ from: firstAccount });

        await Utils.waitDefault();

        loadUserContacts();
      },
      [initialized, contract, setState, accounts, loadUserContacts]
    );

  const updateUserContact: UserContactsProviderContext['updateUserContact'] =
    React.useCallback(
      async (userContact: UserContact) => {
        if (!initialized || !contract || !accounts?.length) {
          return;
        }

        setState((state) => ({
          ...state,
          isLoading: true,
        }));

        const [firstAccount] = accounts;
        const {
          id,
          firstName,
          lastName,
          telNumber,
          email,
          age,
          avatarUrl,
          websiteUrl,
          tags,
        } = userContact;

        await contract.methods
          .updateUserContact(
            id,
            firstName,
            lastName,
            telNumber,
            email,
            age,
            avatarUrl,
            websiteUrl,
            tags
          )
          .send({ from: firstAccount });

        await Utils.waitDefault();

        loadUserContacts();
      },
      [initialized, contract, setState, accounts, loadUserContacts]
    );

  const deleteUserContact: UserContactsProviderContext['deleteUserContact'] =
    React.useCallback(
      async (id: number) => {
        if (!initialized || !contract || !accounts?.length) {
          return;
        }

        setState((state) => ({
          ...state,
          isLoading: true,
        }));

        const [firstAccount] = accounts;

        await contract.methods
          .deleteUserContact(id)
          .send({ from: firstAccount });

        await Utils.waitDefault();

        loadUserContacts();
      },
      [initialized, contract, setState, accounts, loadUserContacts]
    );

  const providerState: UserContactsProviderContext = React.useMemo(
    () => ({
      state,
      loadUserContacts,
      createUserContact,
      updateUserContact,
      deleteUserContact,
    }),
    [
      state,
      loadUserContacts,
      createUserContact,
      updateUserContact,
      deleteUserContact,
    ]
  );

  return (
    <UserContactsContext.Provider value={providerState}>
      {children}
    </UserContactsContext.Provider>
  );
};

export default UserContactsContextProvider;
