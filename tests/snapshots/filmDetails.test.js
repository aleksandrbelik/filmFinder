import React from 'react';
import FilmDetails from 'Common/filmDetails/filmDetails';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FilmDetails />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
