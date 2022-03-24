import * as React from "../_snowpack/pkg/react.js";
import Utils from "../utils/utils.js";
import {Web3Context} from "./Web3Provider.js";
const userContactsProviderInitialState = {
  isLoading: false,
  userContacts: []
};
export const UserContactsContext = React.createContext({});
const UserContactsContextProvider = ({children}) => {
  const [state, setState] = React.useState({
    ...userContactsProviderInitialState
  });
  const {
    state: {contract, initialized, accounts}
  } = React.useContext(Web3Context);
  const loadUserContacts = React.useCallback(async () => {
    if (!initialized || !contract) {
      return;
    }
    setState((state2) => ({
      ...state2,
      isLoading: true
    }));
    const length = await contract.methods.userContactCount().call();
    const userContacts = await Promise.all(Array.from({length}).map((_, i) => contract.methods.userContacts(i + 1).call()));
    setState((state2) => ({
      ...state2,
      userContacts: userContacts.filter(({id}) => id > 0),
      isLoading: false
    }));
  }, [initialized, contract, setState]);
  const createUserContact = React.useCallback(async (userContact) => {
    if (!initialized || !contract || !accounts?.length) {
      return;
    }
    setState((state2) => ({
      ...state2,
      isLoading: true
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
      tags
    } = userContact;
    await contract.methods.createUserContact(firstName, lastName, telNumber, email, age, avatarUrl, websiteUrl, tags).send({from: firstAccount});
    await Utils.waitDefault();
    loadUserContacts();
  }, [initialized, contract, setState, accounts, loadUserContacts]);
  const updateUserContact = React.useCallback(async (userContact) => {
    if (!initialized || !contract || !accounts?.length) {
      return;
    }
    setState((state2) => ({
      ...state2,
      isLoading: true
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
      tags
    } = userContact;
    await contract.methods.updateUserContact(id, firstName, lastName, telNumber, email, age, avatarUrl, websiteUrl, tags).send({from: firstAccount});
    await Utils.waitDefault();
    loadUserContacts();
  }, [initialized, contract, setState, accounts, loadUserContacts]);
  const deleteUserContact = React.useCallback(async (id) => {
    if (!initialized || !contract || !accounts?.length) {
      return;
    }
    setState((state2) => ({
      ...state2,
      isLoading: true
    }));
    const [firstAccount] = accounts;
    await contract.methods.deleteUserContact(id).send({from: firstAccount});
    await Utils.waitDefault();
    loadUserContacts();
  }, [initialized, contract, setState, accounts, loadUserContacts]);
  const providerState = React.useMemo(() => ({
    state,
    loadUserContacts,
    createUserContact,
    updateUserContact,
    deleteUserContact
  }), [
    state,
    loadUserContacts,
    createUserContact,
    updateUserContact,
    deleteUserContact
  ]);
  return /* @__PURE__ */ React.createElement(UserContactsContext.Provider, {
    value: providerState
  }, children);
};
export default UserContactsContextProvider;
