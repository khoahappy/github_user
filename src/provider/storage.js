import localforage from 'localforage';
import STORAGE_KEY from '../consts/storage-key';

localforage.config({
  driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
  name: `${process.env.REACT_APP_NAME}`,
  version: process.env.REACT_APP_VERSION,
  size: 4980736, // Size of database, in bytes. WebSQL-only for now.
  storeName: STORAGE_KEY.NAME, // Should be alphanumeric, with underscores.
  description: 'some description',
});

export default {
  get: async (key) => {
    try {
      const value = await localStorage.getItem(key);
      return value;
    } catch (err) {
      console.warn(err);
      return null;
    }
  },
  set: async (key, value) => {
    try {
      await localStorage.setItem(key, value);
      return value;
    } catch (err) {
      console.warn(err);
      return null;
    }
  },
};
