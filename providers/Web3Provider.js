import * as React from "../_snowpack/pkg/react.js";
import UserContactsContract from "../contracts/UserContacts.json.proxy.js";
import {Web3Utils} from "../utils/web3.utils.js";
const web3ProviderInitialState = {
  initialized: false,
  web3: null,
  accounts: null,
  contract: null
};
export const Web3Context = React.createContext({});
const Web3ContextProvider = ({children}) => {
  const [state, setState] = React.useState({
    ...web3ProviderInitialState
  });
  const loadWeb3 = React.useCallback(async () => {
    const web3 = await Web3Utils.getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = UserContactsContract.networks[networkId];
    if (!deployedNetwork?.address) {
      console.error("Contract not deployed!");
      return;
    }
    const contract = new web3.eth.Contract(UserContactsContract.abi, deployedNetwork.address);
    setState((state2) => ({
      ...state2,
      web3,
      accounts,
      contract,
      initialized: true
    }));
  }, [setState]);
  const providerState = React.useMemo(() => ({
    state,
    loadWeb3
  }), [state, loadWeb3]);
  return /* @__PURE__ */ React.createElement(Web3Context.Provider, {
    value: providerState
  }, children);
};
export default Web3ContextProvider;
