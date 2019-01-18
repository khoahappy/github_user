import api from './api';
import API_URL from '../consts/api-url';

const BASE_URL = `${API_URL.USERS}`;

export default {
  getData: async () => {
    const data = await api.get(BASE_URL);
    return api.handleResponse(data);
  },
  getUser: async (name) => {
    const data = await api.get(`${BASE_URL}/${name}`);
    return api.handleResponse(data);
  },
};
