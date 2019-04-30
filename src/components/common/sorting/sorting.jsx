import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sortTypes } from 'State/list';
import './sorting.less';

const Sorting = ({
  onSortReleaseDateClick,
  onSortRatingClick,
  sort,
  total
}) => (
  <div className="sorting">
    <div className="sorting__found">{total} movies found</div>
    <div className="sorting__controls">
      <span className="sorting__controls__label">Sort by</span>
      <button
        className={classNames('sorting__button', { 'is-active': sort === sortTypes.RELEASE_DATE })}
        type="button"
        onClick={onSortReleaseDateClick}
      >
        release date
      </button>
      <button
        className={classNames('sorting__button', { 'is-active': sort === sortTypes.RATING })}
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
  total: PropTypes.number.isRequired,
  onSortReleaseDateClick: PropTypes.func.isRequired,
  onSortRatingClick: PropTypes.func.isRequired
};

export default Sorting;
