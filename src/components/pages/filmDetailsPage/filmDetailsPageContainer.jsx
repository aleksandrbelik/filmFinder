import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PreLoad from 'Components/hoc/preLoad/preLoad';
import { loadFilmDetails as loadFilmDetailsAction } from 'State/filmDetails';
import FilmDetailsPage from './filmDetailsPage';

class FilmDetailsPageContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.props.loadFilmDetails();
    }
  }

  render() {
    return <FilmDetailsPage {...this.props} />
  }
}

export default compose(
  connect(state => ({
    isPending: state.filmDetails.isPending,
    isFetched: state.filmDetails.isFetched,
    genre: state.filmDetails.data.genres && state.filmDetails.data.genres[0]
  }), dispatch => ({
    loadFilmDetails: id => {
      dispatch(loadFilmDetailsAction(id));
    }
  }), (stateProps, dispatchProps, ownProps) => ({
    ...ownProps,
    ...stateProps,
    loadFilmDetails: () => {
      dispatchProps.loadFilmDetails(ownProps.id)
    }
  })),
  PreLoad(({ loadFilmDetails }) => loadFilmDetails())
)(FilmDetailsPageContainer);