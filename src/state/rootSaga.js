import { all } from 'redux-saga/effects';
import { listSaga } from './list';
import { filmDetailsSaga } from './filmDetails';

export default function* rootSaga() {
  yield all([
    listSaga(),
    filmDetailsSaga()
  ]);
};