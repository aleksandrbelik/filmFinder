import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilms } from 'State/list';
import { sortTypes } from 'State/list';
import Sorting from './sorting';

const SortingContainer = ({ sort, total, searchFilmsByReleaseDate, searchFilmsByRating }) => (
  <Sorting
    onSortReleaseDateClick={searchFilmsByReleaseDate}
    onSortRatingClick={searchFilmsByRating}
    sort={sort}
    total={total}
  />
);

SortingContainer.propTypes = {
  searchFilms: PropTypes.func,
  searchFilmsByReleaseDate: PropTypes.func.isRequired,
  searchFilmsByRating: PropTypes.func.isRequired,
  sort: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
};

SortingContainer.defaultProps = {
  searchFilms: null
};

export default connect(state => ({
  sort: state.list.filters.sortBy,
  total: state.list.searchResults.total
}), dispatch => ({
  searchFilmsByReleaseDate: () => {
    dispatch(searchFilms({ sortBy: sortTypes.RELEASE_DATE }));
  },
  searchFilmsByRating: () => {
    dispatch(searchFilms({ sortBy: sortTypes.RATING }));
  }
}))(SortingContainer);
