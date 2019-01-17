import axios from 'axios';
import HTTP_STATUS_CODES from 'http-status-codes';
import _ from 'lodash';
import APP_CONST from '../consts/app';
import auth from './auth';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: APP_CONST.REQUEST_TIMEOUT,
});

export const apiPost = async (url, data) => {
  const header = await auth.getAuthHeader();
  return instance.post(url,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    });
};

export const apiGet = async (url) => {
  const header = await auth.getAuthHeader();
  return instance.get(url, {
    headers: { ...header },
  });
};

export const apiPatch = async (url, formData) => {
  const header = await auth.getAuthHeader();
  return instance.patch(
    url,
    formData, {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    },
  );
};

export const apiDelete = async (url) => {
  const header = await auth.getAuthHeader();
  return instance.delete(
    url,
    {
      headers: {
        'Content-Type': 'application/json',
        ...header,
      },
    },
  );
};

export const handleAxiosResponse = (response) => {
  const { data } = response;
  const statusCodes = [
    HTTP_STATUS_CODES.OK,
    HTTP_STATUS_CODES.CREATED,
  ];

  if (_.indexOf(statusCodes, response.status) < 0) {
    const error = (data && data.message) || response.statusText;
    return Promise.reject(error);
  }
  return data;
};

export default {
  get: apiGet,
  post: apiPost,
  delete: apiDelete,
  patch: apiPatch,
  handleResponse: handleAxiosResponse,
};
