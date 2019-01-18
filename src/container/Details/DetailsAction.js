export const DETAILS_ACTION_TYPE = {
  GET_USER: 'DETAILS/GET_LIST',
  GET_USER_SUCCESS: 'DETAILS/GET_USER_SUCCESS',
  GET_USER_ERROR: 'DETAILS/GET_USER_ERROR',
};

export const getData = payload => ({
  type: DETAILS_ACTION_TYPE.GET_USER,
  payload,
});

export const getDataSuccess = payload => ({
  type: DETAILS_ACTION_TYPE.GET_USER_SUCCESS,
  payload,
});

export const getDataError = payload => ({
  type: DETAILS_ACTION_TYPE.GET_USER_ERROR,
  payload,
});
