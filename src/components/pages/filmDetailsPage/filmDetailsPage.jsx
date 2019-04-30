import React from 'react';
import PropTypes from 'prop-types';
import Page from 'Common/page/pageContainer';
import FilmDetails from 'Common/filmDetails/filmDetailsContainer';
import FilmsListByGenre from 'Common/FilmsListByGenre/FilmsListByGenreContainer';
import LoaderLayout from 'Common/loaderLayout/loaderLayout';

const FilmDetailsPage = ({ isPending, isFetched, genre }) => (
  <LoaderLayout isPending={isPending}>
    <Page
      header={<FilmDetails />}
      headerLine={isFetched && <span>Films by {genre} genre</span>}
      content={isFetched && <FilmsListByGenre genre={genre} />}
      isFilmDetails
    />
  </LoaderLayout>
);

FilmDetailsPage.propTypes = {
  isPending: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  genre: PropTypes.string
};

FilmDetailsPage.defaultProps = {
  genre: ''
};

export default FilmDetailsPage;
