import api from './api';
import API_URL from '../consts/api-url';

const BASE_URL = `${API_URL.LIST}`;

export default {
  getData: async () => {
    const data = await api.get(BASE_URL);
    return api.handleResponse(data);
  },
};
