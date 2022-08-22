import { SEARCH_LIST_RECIEVED } from './search.actions';

const initialState = {
  searchList: null,
  searchDate: new Date(),
};

const searchReducer = (state = initialState, action) => {
  // console.log('state: 1', state);
  switch (action.type) {
    case SEARCH_LIST_RECIEVED:
      return {
        ...state,
        searchList: action.payload.searchList,
      };
    default:
      return state;
  }
};

export default searchReducer;
