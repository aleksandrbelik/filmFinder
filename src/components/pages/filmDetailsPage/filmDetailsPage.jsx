import React from 'react';
import Page from 'Common/page/page';
import FilmDetails from 'Common/filmDetails/filmDetails';
import FilmsList from 'Common/filmsList/filmsList';

const FilmDetailsPage = () => (
  <Page
    header={<FilmDetails />}
    headerLine={<span>Films by Drama genre</span>}
    content={<FilmsList />}
    isFilmDetails
  />
);

export default FilmDetailsPage;
