export const actionTypes = {
  LOAD_DATA: 'LOAD_DATA',
  LOAD_DATA_SUCCESS: 'LOAD_DATA__SUCCESS',
  LOAD_DATA_FAILURE: 'LOAD_DATA__FAILURE',
  SET_ID: 'SET_ID'
};

export const loadFilmDetails = id => ({
  type: actionTypes.LOAD_DATA,
  payload: id
});

export const loadFilmDetailsSuccess = data => ({
  type: actionTypes.LOAD_DATA_SUCCESS,
  payload: data
});

export const loadFilmDetailsFailure = () => ({
  type: actionTypes.LOAD_DATA_FAILURE
});

export const setFilmId = id => ({
  type: actionTypes.SET_ID,
  payload: id
});