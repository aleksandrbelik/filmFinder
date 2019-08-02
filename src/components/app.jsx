import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchPage from 'Components/pages/searchPage/searchPageContainer';
import FilmDetailsPage from 'Components/pages/filmDetailsPage/filmDetailsPageContainer';
import { ContextProvider } from 'Components/common/contextProvider';
import { Themes } from 'Utils/themes';
import 'Styles/main.less';

const App = ({ filmId, theme }) => (
  <React.Fragment>
    <ContextProvider value={theme}>
      {
        filmId ? ( 
          <FilmDetailsPage id={filmId} />
        ) : (
          <SearchPage />
        )
      }
    </ContextProvider>
  </React.Fragment>
);

App.propTypes = {
  filmId: PropTypes.number
};

App.defaultProps = {
  filmId: null
};

export default connect(state => ({
  filmId: state.filmDetails.id,
  theme: Themes.SUMMER
}))(App);
