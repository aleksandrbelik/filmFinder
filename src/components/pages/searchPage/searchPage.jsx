import React from 'react';
import PropTypes from 'prop-types';
import Page from 'Common/page/pageContainer';
import SearchForm from 'Common/searchForm/searchFormContainer';
import Sorting from 'Common/sorting/sortingContainer';
import FilmsList from 'Common/filmsList/filmsListContainer';
import LoaderLayout from 'Common/loaderLayout/loaderLayout';

const SearchPage = ({ isPending, isFetched }) => (
  <LoaderLayout isPending={isPending}>
    <Page
      header={<SearchForm />}
      headerLine={<Sorting />}
      content={isFetched && <FilmsList />}
    />
  </LoaderLayout>
);

SearchPage.propTypes = {
  isPending: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired
};

export default SearchPage;
