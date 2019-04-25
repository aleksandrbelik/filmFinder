import React from 'react';
import Sorting from 'Common/sorting/sorting';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Sorting sort="sort" onSortRatingClick={() => {}} onSortReleaseDateClick={() => {}}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});