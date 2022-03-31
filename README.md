# Truffle playground

A React web application consuming ETH contract. Supporting following features:

- connection to Web3 wallet;
- creating user contact on chain;
- updating user contact on chain;
- deleting user contact on chain;

The project is a test project, to play around with Truffle integration.

## Release
App is available on:

- [truffle-playground GitHub Pages](https://lubejmatej.github.io/truffle-playground/);

In order for it to work, you need to have the contract [UserContacts.sol](./contracts/UserContacts.sol) deployed on the network your Web3 wallet is connected to.

To update the contract address on deployed app set the following key(`truffle-playground-v1::WEB3_NETWORKS`):

```javascript
localStorage["truffle-playground-v1::WEB3_NETWORKS"] = JSON.stringify({"<Insert Network ID here>": {address: "<Insert contract address>"}})
```

## Development Environment Setup
### Contract development

Contract is bootstrapped with [Truffle](https://trufflesuite.com/truffle/), which is development framework for Ethereum.

In order to deploy the contract, you need connect to some ETH's chain. I would recommend [Ganache](https://trufflesuite.com/ganache/).

Ganache setup(make sure it is running on 7545 port, or change Truffle & Client config):
- Install Ganache UI from [Ganache UI](https://github.com/trufflesuite/ganache-ui/releases), start the application and follow instructions;
- Either install Ganache CLI `npm install ganache -g` and run `ganache -p 7545`;
- Either run the docker image: `docker run --detach --publish 7545:8545 trufflesuite/ganache:latest`;

Install Truffle with `npm install truffle -g`. To deploy the contract run `truffle deploy --reset`. You can omit `--reset`if this is your first deploy.

Once you have contract running you can connect with deploy client application here [truffle-playground GitHub Pages](https://lubejmatej.github.io/truffle-playground/). Check [Release](./README.md#Release) section for more information.

### Client development

React web app is located in [client](./client) folder. In order to see client development instructions navigate to [client README.md](./client/README.md). 

### Source Code Setup

```bash
git clone https://github.com/lubejmatej/truffle-playground
cd truffle-playground

# install packages in root folder
npm ci

# install packages in client folder
cd client && npm ci

# install Ganache
npm install ganache -g

# install Truffle
npm install truffle -g

# run test chain
ganache -p 7545

# deploy contract
truffle deploy --reset

# run client in dev mode
cd client && npm start
```

#### Running Truffle Tests

Run `truffle test` to execute unit tests for Truffle.
