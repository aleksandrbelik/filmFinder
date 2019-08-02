import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Themes } from 'Utils/themes';
import ThemeContext from 'Components/common/contextProvider';
import './page.less';

const Page = ({
  header,
  headerLine,
  content,
  isFilmDetails,
  onSearchClick
}) => (
  <ThemeContext.Consumer>
    {
      theme => (
        <div className={classNames('page', {
          'is-film-details': isFilmDetails,
          'theme-new-year': theme === Themes.NEW_YEAR,
          'theme-summer': theme === Themes.SUMMER
          })}>
          <div className="page__header">
            <div className="page__header__container">
              <div className="page__header__main">
                <div className="page__header__top">
                  <div className="page__header__name">netflixroulette</div>
                  {
                    isFilmDetails && (
                      <button className="page__header__button" type="button" onClick={onSearchClick}>SEARCH</button>
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
      )
    }
  </ThemeContext.Consumer>
);

Page.propTypes = {
  header: PropTypes.node.isRequired,
  headerLine: PropTypes.node,
  content: PropTypes.node.isRequired,
  isFilmDetails: PropTypes.bool,
  onSearchClick: PropTypes.func.isRequired
};

Page.defaultProps = {
  headerLine: null,
  isFilmDetails: false
};

export default Page;
