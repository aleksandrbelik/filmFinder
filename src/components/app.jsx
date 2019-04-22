import React from 'react';
import ErrorBoundaryWrapper from 'Components/hoc/errorBoundary/errorBoundaryWrapper';
import SearchPage from 'Components/pages/searchPage/searchPage';
import 'Styles/main.less';

const App = () => (
  <SearchPage />
);

export default ErrorBoundaryWrapper(App);
