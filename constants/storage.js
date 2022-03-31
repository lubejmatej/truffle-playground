import * as __SNOWPACK_ENV__ from '../_snowpack/env.js';

const STORAGE_VERSION = __SNOWPACK_ENV__.STORAGE_VERSION || 1;
const STORAGE_PREFIX = `truffle-playground-v${STORAGE_VERSION}::`;
var StorageKeys;
(function(StorageKeys2) {
  StorageKeys2["WEB3_NETWORKS"] = "WEB3_NETWORKS";
})(StorageKeys || (StorageKeys = {}));
export {STORAGE_PREFIX, StorageKeys};
