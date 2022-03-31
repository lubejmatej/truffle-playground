import Web3 from "../_snowpack/pkg/web3/dist/web3.min.js";
export class Web3Utils {
  static getWeb3() {
    return new Promise(async (resolve, reject) => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        console.log("Injected web3 detected.");
        resolve(window.web3);
      } else {
        const provider = new Web3.providers.HttpProvider("http://0.0.0.0:7545");
        const web3 = new Web3(provider);
        console.warn("No web3 instance injected, using default ganache instance.");
        resolve(web3);
      }
    });
  }
}
