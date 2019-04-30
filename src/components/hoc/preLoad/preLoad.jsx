import React from 'react';

const PreLoad = loadFunc => WrappedComponent => {
  return class extends React.Component {
    componentDidMount() {
      if (loadFunc) {
        loadFunc(this.props);
      }
    }
    render() {
      return (
        <WrappedComponent {...this.props} />
      )
    }
  }
}

export default PreLoad;