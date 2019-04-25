import React from 'react';
import Page from 'Common/page/page';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Page header={<span>header</span>} headerLine={<span>headerLine</span>} content={<span>content</span>} isFilmDetails />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without headerLine prop', () => {
  const tree = renderer
    .create(<Page header={<span>header</span>} content={<span>content</span>} isFilmDetails />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without isFilmDetails prop', () => {
  const tree = renderer
    .create(<Page header={<span>header</span>} headerLine={<span>headerLine</span>} content={<span>content</span>}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly without headerLine and isFilmDetails props', () => {
  const tree = renderer
    .create(<Page header={<span>header</span>} content={<span>content</span>}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});