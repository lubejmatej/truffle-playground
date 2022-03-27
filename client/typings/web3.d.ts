declare module 'web3/dist/web3.min' {
  interface Web3Interface {
    new (): any;
    new (provider: any): any;

    providers: any;
  }

  const Web3: Web3Interface;
  export = Web3;
}
