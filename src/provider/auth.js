import storage from './storage';
import STORAGE_KEY from '../consts/storage-key';

const getAuthHeader = async () => {
  const token = await storage.get(STORAGE_KEY.TOKEN);
  return {
    Authorization: `Bearer ${token}`,
  };
};

export default {
  getAuthHeader,
};
