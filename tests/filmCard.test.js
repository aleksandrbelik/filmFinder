import React from 'react';
import FilmCard from 'Common/filmCard/filmCard';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FilmCard name="name" genre="genre" year="year" imgSrc="imgSrc" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});