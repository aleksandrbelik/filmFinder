import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from 'Common/filmCard/filmCardContainer';
import SearchEmpty from 'Common/searchEmpty/searchEmpty';
import './filmsList.less';

const FilmList = ({ list, isFetched }) => (
  isFetched && <div className="film-list">
    {
      !!list.length && list.map(film => (
        <FilmCard key={film.id} {...film} />
      ))
    }
    {
      !list.length && (
        <SearchEmpty />
      )
    }
  </div>
);

FilmList.propTypes = {
  list: PropTypes.array,
  isFetched: PropTypes.bool.isRequired
};

FilmList.defaultProps = {
  list: null
};

export default FilmList;
