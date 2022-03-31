const STORAGE_VERSION = import.meta.env.STORAGE_VERSION || 1;
const STORAGE_PREFIX = `truffle-playground-v${STORAGE_VERSION}::`;

enum StorageKeys {
  WEB3_NETWORKS = 'WEB3_NETWORKS',
}

export { STORAGE_PREFIX, StorageKeys };
