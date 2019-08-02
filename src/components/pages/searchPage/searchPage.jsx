import React from 'react';
import PropTypes from 'prop-types';
import Page from 'Common/page/pageContainer';
import SearchForm from 'Common/searchForm/searchFormContainer';
import Sorting from 'Common/sorting/sortingContainer';
import FilmsList from 'Common/filmsList/filmsListContainer';
import LoaderLayout from 'Common/loaderLayout/loaderLayout';

const SearchPage = ({ isPending, isFetched, theme }) => (
  <LoaderLayout isPending={isPending}>
    <Page
      header={<SearchForm theme={theme} />}
      headerLine={<Sorting />}
      content={isFetched && <FilmsList />}
      theme={theme}
    />
  </LoaderLayout>
);

SearchPage.propTypes = {
  isPending: PropTypes.bool.isRequired,
  isFetched: PropTypes.bool.isRequired,
  theme: PropTypes.string.isRequired
};

export default SearchPage;
