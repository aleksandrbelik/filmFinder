/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ErrorBoundaryWrapper from 'Components/hoc/errorBoundary/errorBoundaryWrapper';
import './page.less';

const Page = ({
  header,
  headerLine,
  content,
  isFilmDetails
}) => (
  <div className={classNames('page', { 'is-film-details': isFilmDetails })}>
    <div className="page__header">
      <div className="page__header__container">
        <div className="page__header__main">
          <div className="page__header__top">
            <div className="page__header__name">netflixroulette</div>
            {
              isFilmDetails && (
                <button className="page__header__button" type="button">SEARCH</button>
              )
            }
          </div>
          <div className="page__header__cnt">
            {header}
          </div>
        </div>
      </div>
    </div>
    <div className="page__header-line">
      {headerLine}
    </div>
    <div className="page__content">
      {content}
    </div>
    <div className="page__footer">netflixroulette</div>
  </div>
);

Page.propTypes = {
  header: PropTypes.node.isRequired,
  headerLine: PropTypes.node,
  content: PropTypes.node.isRequired,
  isFilmDetails: PropTypes.bool
};

Page.defaultProps = {
  headerLine: null,
  isFilmDetails: false
};

export default ErrorBoundaryWrapper(Page);
