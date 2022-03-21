# truffle-playground-client

## How to run on localhost

First install dependencies:

```sh
npm install
```

To run in dev mode mode:

```sh
npm start
```

Then go to http://localhost:8080

To create a production build:

```sh
npm run build
```

## Testing

To run unit tests:

```sh
npm test
```

## Known issues

### Web3 import

```typescript
// Following import breaks snowpack
// import web3 from 'web3';

// Importing already built version, seeems to do the trick
import web3 from 'web3/dist/web3.min';
```

[https://github.com/withastro/snowpack/issues/2869](https://github.com/withastro/snowpack/issues/2869)
