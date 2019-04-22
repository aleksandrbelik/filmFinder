import React from 'react';
import Sorting from './sorting';
import { SORT_RELEASE_DATE, SORT_RATING } from './sortingHelpers';

class SortingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: SORT_RELEASE_DATE
    };
    this.onSortReleaseDateClick = this.onSortReleaseDateClick.bind(this);
    this.onSortRatingClick = this.onSortRatingClick.bind(this);
  }

  onSortReleaseDateClick() {
    this.setState({ sort: SORT_RELEASE_DATE });
  }

  onSortRatingClick() {
    this.setState({ sort: SORT_RATING });
  }

  render() {
    const { sort } = this.state;
    return (
      <Sorting
        onSortReleaseDateClick={this.onSortReleaseDateClick}
        onSortRatingClick={this.onSortRatingClick}
        sort={sort}
      />
    );
  }
}

export default SortingContainer;
