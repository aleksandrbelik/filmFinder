import React from 'react';
import ErrorBoundary from './errorBoundary';

const ErrorBoundaryWrapper = WrappedComponent => props => (
  <ErrorBoundary>
    <WrappedComponent {...props} />
  </ErrorBoundary>
);

export default ErrorBoundaryWrapper;
