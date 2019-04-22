import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SORT_RELEASE_DATE, SORT_RATING } from './sortingHelpers';
import './sorting.less';

const Sorting = ({
  onSortReleaseDateClick,
  onSortRatingClick,
  sort
}) => (
  <div className="sorting">
    <div>7 movies found</div>
    <div>
      <span>Sort by</span>
      <button
        className={classNames('sorting__button', { 'is-active': sort === SORT_RELEASE_DATE })}
        type="button"
        onClick={onSortReleaseDateClick}
      >
        release date
      </button>
      <button
        className={classNames('sorting__button', { 'is-active': sort === SORT_RATING })}
        type="button"
        onClick={onSortRatingClick}
      >
        rating
      </button>
    </div>
  </div>
);

Sorting.propTypes = {
  sort: PropTypes.string.isRequired,
  onSortReleaseDateClick: PropTypes.func.isRequired,
  onSortRatingClick: PropTypes.func.isRequired
};

export default Sorting;
