import { take, all, call, put } from 'redux-saga/effects';
import { actionTypes, loadFilmDetailsSuccess, loadFilmDetailsFailure } from './filmDetailsActions';
import { loadFilmDetails as loadFilmDetailsApi } from 'State/services/services';

function* loadFilmDetails() {
  while (true) {
    try {
      const { payload } = yield take(actionTypes.LOAD_DATA);
      const response = yield call(loadFilmDetailsApi, payload);
      if (response) {
        yield put(loadFilmDetailsSuccess(response));
      } else {
        yield put(loadFilmDetailsFailure());
      }
    } catch(e) {
      yield put(loadFilmDetailsFailure());
    }
  }
}

export default function* filmDetailsSaga() {
  yield all([
    loadFilmDetails()
  ]);
};