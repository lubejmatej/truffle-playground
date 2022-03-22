import * as React from 'react';
import Web3Interface from 'web3';
import type { Contract } from 'web3-eth-contract';
import { ContractSendMethod } from 'web3-eth-contract';
import { AbiItem } from 'web3-utils';

import UserContactsContract from '../contracts/UserContacts.json';
import { Web3Utils } from '../utils/web3.utils';

interface UserContactsContractInterface extends Contract {
  methods: {
    userContactCount: () => ContractSendMethod;
    userContacts: (id: number) => ContractSendMethod;

    createUserContact: (
      firstName: string,
      lastName: string,
      telNumber: string,
      email: string,
      age: number,
      avatarUrl: string,
      websiteUrl: string,
      tags: string
    ) => ContractSendMethod;

    updateUserContact: (
      id: number,
      firstName: string,
      lastName: string,
      telNumber: string,
      email: string,
      age: number,
      avatarUrl: string,
      websiteUrl: string,
      tags: string
    ) => ContractSendMethod;

    deleteUserContact: (id: number) => ContractSendMethod;
  };
}

interface Web3ProviderState {
  initialized: boolean;
  web3: Web3Interface | null;
  accounts: string[] | null;
  contract: UserContactsContractInterface | null;
}

interface Web3ProviderContext {
  readonly state: Web3ProviderState;
  loadWeb3: () => void;
}

const web3ProviderInitialState: Web3ProviderState = {
  initialized: false,
  web3: null,
  accounts: null,
  contract: null,
};

export const Web3Context = React.createContext<Web3ProviderContext>(
  {} as Web3ProviderContext
);

const Web3ContextProvider: React.FC = ({ children }) => {
  const [state, setState] = React.useState<Web3ProviderState>({
    ...web3ProviderInitialState,
  });

  const loadWeb3: Web3ProviderContext['loadWeb3'] =
    React.useCallback(async () => {
      const web3 = await Web3Utils.getWeb3();
      const accounts = await web3.eth.getAccounts();
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = (
        UserContactsContract.networks as {
          [index: number]: { address?: string };
        }
      )[networkId];

      if (!deployedNetwork?.address) {
        console.error('Contract not deployed!');
        return;
      }

      const contract = new web3.eth.Contract(
        UserContactsContract.abi as AbiItem[],
        deployedNetwork.address
      ) as Contract;

      setState((state) => ({
        ...state,
        web3,
        accounts,
        contract,
        initialized: true,
      }));
    }, [setState]);

  const providerState: Web3ProviderContext = React.useMemo(
    () => ({
      state,
      loadWeb3,
    }),
    [state, loadWeb3]
  );

  return (
    <Web3Context.Provider value={providerState}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;