import { handleActions } from 'redux-actions';
import { actionTypes } from './filmDetailsActions';

const initialState = {
  data: {},
  id: null,
  isPending: false,
  isFetched: false,
  isError: false
};

export default handleActions(
  {
    [actionTypes.LOAD_DATA]: state => ({
      ...state,
      isPending: true,
      isFetched: false,
      isError: false
    }),
    [actionTypes.LOAD_DATA_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload.data,
      isPending: false,
      isFetched: true
    }),
    [actionTypes.LOAD_DATA_FAILURE]: state => ({
      ...state,
      data: {},
      isPending: false,
      isFetched: true,
      isError: true
    }),
    [actionTypes.SET_ID]: (state, action) => ({
      ...state,
      id: action.payload
    })
  },
  initialState
);