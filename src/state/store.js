import { createStore, applyMiddleware } from 'redux';
import reduxSaga from 'redux-saga';
import reducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from './rootSaga';

const sagaMiddleware = reduxSaga();
let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(sagaMiddleware)
    )
  );
} else {
  store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  )
}

sagaMiddleware.run(rootSaga);

export default store;