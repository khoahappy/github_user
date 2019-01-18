import { DETAILS_ACTION_TYPE } from './DetailsAction';

const initialState = {
  isFetching: false,
  data: [],
  error: undefined,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DETAILS_ACTION_TYPE.GET_USER:
      return { ...state, isFetching: true };
    case DETAILS_ACTION_TYPE.GET_USER_SUCCESS:
      return { ...state, isFetching: false, data: action.payload };
    case DETAILS_ACTION_TYPE.GET_USER_ERROR: {
      return { ...state, isFetching: false, error: action.payload };
    }
    default:
      return state;
  }
};
