import { getDataSuccess, getDataError } from './DetailsAction';
// import listProvider from '../../provider/list';
import userProvider from '../../provider/users';

export const getDataThunk = name => async (dispatch, getState) => {
  try {
    const data = await userProvider.getUser(name);
    return dispatch(getDataSuccess(data));
  } catch (err) {
    console.warn(err);
    return dispatch(getDataError());
  }
};
