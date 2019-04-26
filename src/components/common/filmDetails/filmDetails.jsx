import React from 'react';
import PropTypes from 'prop-types';
import './filmDetails.less';

const FilmDetails = ({
  title, subtitle, year, duration, description, imgSrc
}) => (
  <div className="film-details">
    <div className="film-details__image-container">
      <img className="film-details__image" src={imgSrc} alt="" />
    </div>
    <div className="film-details__main">
      <div className="film-details__title">{title}</div>
      <div className="film-details__subtitle">{subtitle}</div>
      <div className="film-details__info">
        <span className="film-details__year">{year}</span>
        <span className="film-details__duration">{duration}</span>
      </div>
      <div className="film-details__description">{description}</div>
    </div>
  </div>
);

FilmDetails.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  year: PropTypes.string,
  duration: PropTypes.string,
  description: PropTypes.string,
  imgSrc: PropTypes.string
};

FilmDetails.defaultProps = {
  title: 'Pulp Fiction',
  subtitle: 'Oscar-winning Movies',
  year: '1994',
  duration: '154 min',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at tempor lectus. Nam porttitor scelerisque enim, ac posuere diam tincidunt vel. Donec ullamcorper fermentum egestas. Sed elit tellus, euismod et ex a, fermentum tincidunt nulla. Sed at lectus neque. Vestibulum lacinia sed lorem eu bibendum. Duis ante ex, dignissim vel sollicitudin at, ultrices bibendum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus scelerisque lectus neque, eu accumsan metus auctor placerat. Sed nisi felis, elementum vel est quis, faucibus elementum dolor. Maecenas a dictum ligula, vitae cursus neque. Nunc sollicitudin sodales feugiat. Vivamus consequat at tortor quis aliquam. Fusce et egestas quam, sed vehicula ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
};

export default FilmDetails;
