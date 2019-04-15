import React from 'react';
import ReactCreateElement from 'Task1/reactCreateElement';
import renderer from 'react-test-renderer';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

afterEach(cleanup);

it('renders correctly', () => {
  const tree = renderer
    .create(<ReactCreateElement />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a "Hello World" message', () => {
  const { getByText } = render(<ReactCreateElement />);
  expect(getByText('Hello World! (React Create Element component)')).toBeInTheDocument();
});
