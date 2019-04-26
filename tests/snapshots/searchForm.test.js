import React from 'react';
import SearchForm from 'Common/searchForm/searchForm';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<SearchForm
      onSubmit={() => {}}
      onChange={() => {}}
      value=""
      filter=""
      onFilterTitleClick={() => {}}
      onFilterGenreClick={() => {}}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
