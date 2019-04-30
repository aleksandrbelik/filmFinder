import React from 'react';
import PropTypes from 'prop-types';
import './filmDetails.less';

const FilmDetails = ({
  title,
  tagline,
  release_date,
  runtime,
  overview,
  poster_path
}) => (
  <div className="film-details">
    <div className="film-details__image-container">
      <img className="film-details__image" src={poster_path} alt="" />
    </div>
    <div className="film-details__main">
      <div className="film-details__title">{title}</div>
      <div className="film-details__subtitle">{tagline}</div>
      <div className="film-details__info">
        <span className="film-details__year">{release_date.slice(0, 4)}</span>
        <span className="film-details__duration">{runtime} min</span>
      </div>
      <div className="film-details__description">{overview}</div>
    </div>
  </div>
);

FilmDetails.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  release_date: PropTypes.string,
  runtime: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string
};

FilmDetails.defaultProps = {
  title: '',
  tagline: '',
  release_date: '',
  runtime: null,
  overview: '',
  poster_path: ''
};

export default FilmDetails;
