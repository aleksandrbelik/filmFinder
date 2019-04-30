import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchPage from 'Components/pages/searchPage/searchPageContainer';
import FilmDetailsPage from 'Components/pages/filmDetailsPage/filmDetailsPageContainer';
import 'Styles/main.less';

const App = ({ filmId }) => (
  <React.Fragment>
    {
      filmId ? (
        <FilmDetailsPage id={filmId} />
      ) : (
        <SearchPage />
      )
    }
  </React.Fragment>
);

App.propTypes = {
  filmId: PropTypes.number
};

App.defaultProps = {
  filmId: null
};

export default connect(state => ({
  filmId: state.filmDetails.id
}))(App);
