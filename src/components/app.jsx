import React, { Fragment } from 'react';
import ReactCreateElementComponent from 'Task1/reactCreateElement.jsx';
import ReactComponent from 'Task1/reactComponent.jsx';
import ReactPureComponent from 'Task1/reactPureComponent.jsx';
import ReactFunctionalComponent from 'Task1/reactFunctionalComponent.jsx';

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