import React from 'react';
import PropTypes from 'prop-types';
import './filmCard.less';

const FilmCard = ({
  id,
  title,
  genres,
  release_date,
  poster_path,
  onClick
}) => (
  <div className="film-card" onClick={onClick}>
    <img className="film-card__image" src={poster_path} alt="" />
    <div className="film-card__info">
      <div className="film-card__name">{title}</div>
      <div className="film-card__year">{release_date.slice(0, 4)}</div>
    </div>
    <div className="film-card__genre">{genres.join(', ')}</div>
  </div>
);

FilmCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  release_date: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilmCard;
