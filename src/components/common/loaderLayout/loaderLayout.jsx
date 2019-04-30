import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './LoaderLayout.less';

const LoaderLayout = ({ isPending, children }) => (
  <div className={classNames('loader-layout', { 'is-loading': isPending })}>
    <div className="loader-layout__content">
      <div className="loader-layout__text">loading...</div>
    </div>
    {children}
  </div>
);

LoaderLayout.propTypes = {
  isPending: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default LoaderLayout;