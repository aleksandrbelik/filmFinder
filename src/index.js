import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'Components/appProvider';

const component = () => {
  const element = document.createElement('div');
  element.id = 'App';
  return element;
};
document.body.appendChild(component());

ReactDOM.render(<App />, document.getElementById('App'));
