import React from 'react';
import { Provider } from 'react-redux';
import store from 'State/store';
import ErrorBoundaryWrapper from 'Components/hoc/errorBoundary/errorBoundaryWrapper';
import App from './app';

const AppProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ErrorBoundaryWrapper(AppProvider);
