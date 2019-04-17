import React from 'react';
import Page from 'Common/page/page';
import SearchForm from 'Common/searchForm/searchForm';
import Sorting from 'Common/sorting/sorting';
import FilmsList from 'Common/filmsList/filmsList';

const SearchPage = () => (
  <Page
    header={<SearchForm />}
    headerLine={<Sorting />}
    content={<FilmsList />}
  />
);

export default SearchPage;
