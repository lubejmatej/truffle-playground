# Truffle Playground Client

## Development Environment Setup

First install dependencies(if you haven't before):

```sh
npm ci
```

To run in dev mode mode:

```sh
npm start
```

Then go to http://localhost:8080

---

To create a production build:

```sh
npm run build
```

## Testing

To run unit tests via Jest:

```sh
npm test
```

To run e2e tests via Cypress(you need to have dev server running):

```sh
npm run test:e2e:open
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
