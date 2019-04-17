import React from 'react';
import PropTypes from 'prop-types';
import ErrorBoundaryWrapper from 'Components/hoc/errorBoundary/errorBoundaryWrapper';
import './filmCard.less';

const FilmCard = ({
  name,
  genre,
  year,
  imgSrc
}) => (
  <div className="film-card">
    <img className="film-card__image" src={imgSrc} alt="" />
    <div className="film-card__info">
      <div className="film-card__name">{name}</div>
      <div className="film-card__year">{year}</div>
    </div>
    <div className="film-card__genre">{genre}</div>
  </div>
);

FilmCard.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired
};

export default ErrorBoundaryWrapper(FilmCard);
