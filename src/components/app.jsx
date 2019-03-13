import React, { Fragment } from 'react';
import ReactCreateElementComponent from './task1/reactCreateElement.jsx';
import ReactComponent from './task1/reactComponent.jsx';
import ReactPureComponent from './task1/reactPureComponent.jsx';
import ReactFunctionalComponent from './task1/reactFunctionalComponent.jsx';

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