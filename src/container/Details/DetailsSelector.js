import { createSelector } from 'reselect';

const detailsSelect = state => state.details;
export default {
  isFetching: createSelector(detailsSelect, state => state.isFetching),
  user: createSelector(detailsSelect, state => state.data),
};
