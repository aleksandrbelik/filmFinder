import { take, all, call, put, select } from 'redux-saga/effects';
import { actionTypes, searchFilmsSuccess, searchFilmsFailure } from './listActions';
import { searchFilms as searchFilmsApi } from 'State/services/services';

function* searchFilms() {
  while (true) {
    try {
      yield take(actionTypes.SEARCH);
      const { list: { filters } } = yield select();
      const response = yield call(searchFilmsApi, filters);
      if (response) {
        yield put(searchFilmsSuccess(response));
      } else {
        yield put(searchFilmsFailure());
      }
    } catch(e) {
      yield put(searchFilmsFailure());
    }
  }
}

export default function* listSaga() {
  yield all([
    searchFilms()
  ]);
};