import React from 'react';
import SearchEmpty from 'Common/searchEmpty/searchEmpty';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchEmpty/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});