import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { searchTypes } from 'State/list';
import { Themes } from 'Utils/themes';
import ThemeContext from 'Components/common/contextProvider';
import './searchForm.less';

class SearchForm extends React.Component {
  static contextType = ThemeContext;

  render() {
    const {
      onSubmit,
      onChange,
      value,
      filter,
      onFilterTitleClick,
      onFilterGenreClick
    } = this.props;
    const theme = this.context;
    return (
      <form className={classNames('search-form', {
        'theme-new-year': theme === Themes.NEW_YEAR,
        'theme-summer': theme === Themes.SUMMER
        })} onSubmit={onSubmit}>
        <div className="search-form__field">
          <span className="search-form__label">FIND YOUR MOVIE</span>
          <input className="search-form__input" type="text" value={value} onChange={onChange} />
        </div>
        <div className="search-form__controls">
          <div className="search-form__filter">
            <span className="search-form__filter__label">SEARCH BY</span>
            <button
              className={classNames('search-form__filter__btn', { 'is-active': filter === searchTypes.TITLE })}
              type="button"
              onClick={onFilterTitleClick}
            >
              TITLE
            </button>
            <button
              className={classNames('search-form__filter__btn', { 'is-active': filter === searchTypes.GENRE })}
              type="button"
              onClick={onFilterGenreClick}
            >
              GENRE
            </button>
          </div>
          <input className="search-form__button" type="submit" value="SEARCH" />
        </div>
      </form>
    )
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onFilterTitleClick: PropTypes.func.isRequired,
  onFilterGenreClick: PropTypes.func.isRequired
};

export default SearchForm;
