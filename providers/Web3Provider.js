import * as React from "../_snowpack/pkg/react.js";
import {StorageKeys} from "../constants/storage.js";
import UserContactsContract from "../contracts/UserContacts.json.proxy.js";
import storage from "../utils/storage.util.js";
import {Web3Utils} from "../utils/web3.utils.js";
const web3LocalStorage = storage();
const web3ProviderInitialState = {
  initialized: false,
  web3: null,
  accounts: null,
  contract: null
};
export const Web3Context = React.createContext({});
const Web3ContextProvider = ({
  children
}) => {
  const [state, setState] = React.useState({
    ...web3ProviderInitialState
  });
  const loadWeb3 = React.useCallback(async () => {
    const web3 = await Web3Utils.getWeb3();
    const accounts = await web3.eth.getAccounts();
    const networkId = await web3.eth.net.getId();
    const getStorageNetworkIfAny = (networkId2) => {
      const storageNetworks = web3LocalStorage.get(StorageKeys.WEB3_NETWORKS);
      if (storageNetworks && typeof storageNetworks === "object" && storageNetworks[networkId2]) {
        return storageNetworks[networkId2];
      }
      return null;
    };
    const deployedNetwork = UserContactsContract.networks[networkId];
    const storageNetwork = getStorageNetworkIfAny(networkId);
    if (!deployedNetwork?.address && !storageNetwork?.address) {
      console.error("Contract not deployed!");
      return;
    }
    const contract = new web3.eth.Contract(UserContactsContract.abi, storageNetwork?.address ?? deployedNetwork.address);
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
