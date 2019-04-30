import { handleActions } from 'redux-actions';
import { actionTypes } from './listActions';
import { sortTypes, searchTypes } from './listHelpers';

const initialState = {
  searchResults: {
    total: 0
  },
  filters: {
    sortBy: sortTypes.RELEASE_DATE,
    sortOrder: 'asc',
    search: '',
    searchBy: searchTypes.TITLE,
    filter: ''
  },
  isPending: false,
  isFetched: false,
  isError: false
};

export default handleActions(
  {
    [actionTypes.SEARCH]: (state, action) => ({
      ...state,
      filters: {
        ...state.filters,
        ...action.payload
      },
      isPending: true,
      isFetched: false,
      isError: false
    }),
    [actionTypes.SEARCH_SUCCESS]: (state, action) => ({
      ...state,
      searchResults: action.payload.data,
      isPending: false,
      isFetched: true
    }),
    [actionTypes.SEARCH_FAILURE]: (state, action) => ({
      ...state,
      searchResults: {
        ...state.searchResults,
        data: []
      },
      isPending: false,
      isFetched: true,
      isError: true
    })
  },
  initialState
);