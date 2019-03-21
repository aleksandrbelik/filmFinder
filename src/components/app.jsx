import React, { Fragment } from 'react';
import ReactCreateElementComponent from 'Task1/reactCreateElement';
import ReactComponent from 'Task1/reactComponent';
import ReactPureComponent from 'Task1/reactPureComponent';
import ReactFunctionalComponent from 'Task1/reactFunctionalComponent';

const App = () => (
  <Fragment>
    <div>Blank message</div>
    <ReactCreateElementComponent />
    <ReactComponent />
    <ReactPureComponent />
    <ReactFunctionalComponent />
  </Fragment>
);

export default App;
