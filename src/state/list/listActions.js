export const actionTypes = {
  SEARCH: 'SEARCH',
  SEARCH_SUCCESS: 'SEARCH__SUCCESS',
  SEARCH_FAILURE: 'SEARCH__FAILURE'
};

export const searchFilms = params => ({
  type: actionTypes.SEARCH,
  payload: params
});

export const searchFilmsSuccess = data => ({
  type: actionTypes.SEARCH_SUCCESS,
  payload: data
});

export const searchFilmsFailure = () => ({
  type: actionTypes.SEARCH_FAILURE
});