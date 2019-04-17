import React from 'react';
import ErrorBoundaryWrapper from 'Components/hoc/errorBoundary/errorBoundaryWrapper';
import './searchForm.less';

const SearchForm = () => (
  <form className="search-form">
    <div className="search-form__field">
      <span className="search-form__label">FIND YOUR MOVIE</span>
      <input className="search-form__input" type="text" />
    </div>
    <div className="search-form__controls">
      <div className="search-form__filter">
        <span className="search-form__filter__label">SEARCH BY</span>
        <button className="search-form__filter__btn" type="button">TITLE</button>
        <button className="search-form__filter__btn" type="button">GENRE</button>
      </div>
      <button className="search-form__button" type="button">SEARCH</button>
    </div>
  </form>
);

export default ErrorBoundaryWrapper(SearchForm);
