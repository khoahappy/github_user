import { getDataSuccess, getDataError } from './HomeAction';
// import listProvider from '../../provider/list';
import userProvider from '../../provider/users';

export const getDataThunk = () => async (dispatch, getState) => {
  try {
    const data = await userProvider.getData();
    return dispatch(getDataSuccess(data));
  } catch (err) {
    console.warn(err);
    return dispatch(getDataError());
  }
};
