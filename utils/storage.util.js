import {STORAGE_PREFIX} from "../constants/storage.js";
const storage = (storage2 = localStorage) => {
  const set = (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      storage2.setItem(`${STORAGE_PREFIX}${key}`, serializedValue);
    } catch (error) {
      throw new Error(`Failed to serialize value for key: "${key}"`);
    }
  };
  const get = (key) => {
    try {
      const serializedValue = storage2.getItem(`${STORAGE_PREFIX}${key}`);
      if (!serializedValue) {
        return;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      throw new Error(`Failed to deserialize value for key: "${key}"`);
    }
  };
  const removeItem = (key) => {
    storage2.removeItem(`${STORAGE_PREFIX}${key}`);
  };
  const clear = () => {
    storage2.clear();
  };
  return {
    set,
    get,
    removeItem,
    clear
  };
};
export default storage;
