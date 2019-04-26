import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo
    });
    if (process.env.NODE_ENV === 'development') {
      console.log(errorInfo); // eslint-disable-line
    }
  }

  render() {
    const { children } = this.props;
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </div>
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired
};

export default ErrorBoundary;
