import { createSelector } from 'reselect';

const homeSelect = state => state.home;
export default {
  isFetching: createSelector(homeSelect, state => state.isFetching),
};
