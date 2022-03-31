import Web3Interface from 'web3';
import Web3 from 'web3/dist/web3.min';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export abstract class Web3Utils {
  static getWeb3(): Promise<Web3Interface> {
    return new Promise(async (resolve, reject) => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Accounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        console.log('Injected web3 detected.');
        resolve(window.web3);
      }
      // Fallback to localhost
      else {
        const provider = new Web3.providers.HttpProvider('http://0.0.0.0:7545');
        const web3 = new Web3(provider);
        console.warn(
          'No web3 instance injected, using default ganache instance.'
        );
        resolve(web3);
      }
    });
  }
}
