import { combineReducers } from 'redux';
import { listReducer } from './list';
import { filmDetailsReducer } from './filmDetails';

export default combineReducers({
  list: listReducer,
  filmDetails: filmDetailsReducer
});