import React from 'react';
import PropTypes from 'prop-types';
import './page.less';

const Page = ({ header, headerLine, content }) => (
  <div className="page">
    <div className="page__header">
      <div className="page__header__container">
        <div className="page__header__main">
          <div className="page__header__top">
            <div className="page__header__name">netflixroulette</div>
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
  content: PropTypes.node.isRequired
};

Page.defaultProps = {
  headerLine: null
};

export default Page;
