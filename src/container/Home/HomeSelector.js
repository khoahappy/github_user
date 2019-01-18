import { createSelector } from 'reselect';
import _ from 'lodash';
import APP_CONST from '../../consts/app';

const homeSelect = state => state.home;
export default {
  isFetching: createSelector(homeSelect, state => state.isFetching),
  user: createSelector(homeSelect, state => state.data || []),
  topFive: createSelector(homeSelect, state => _.take(state.data, APP_CONST.USER_LIMIT)),
};
