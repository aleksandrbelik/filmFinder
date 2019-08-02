import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { sortTypes } from 'State/list';
import { Themes } from 'Utils/themes';
import ThemeContext from 'Components/common/contextProvider';
import './sorting.less';

const Sorting = ({
  onSortReleaseDateClick,
  onSortRatingClick,
  sort,
  total
}) => {
  const theme = useContext(ThemeContext);
  return (
    <div className={classNames('sorting', {
      'theme-new-year': theme === Themes.NEW_YEAR,
      'theme-summer': theme === Themes.SUMMER
      })}>
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
}

Sorting.propTypes = {
  sort: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  onSortReleaseDateClick: PropTypes.func.isRequired,
  onSortRatingClick: PropTypes.func.isRequired
};

export default Sorting;
