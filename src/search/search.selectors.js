// import { createSelector } from 'reselect';

export const searchListSelector = (state) => {
  // console.log(111);
  // console.log('state: ', state);
  // console.log('state.search.searchList: ', state.search.searchList);
  return state.search.searchList;
};
