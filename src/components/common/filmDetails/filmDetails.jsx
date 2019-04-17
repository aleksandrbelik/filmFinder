import React from 'react';
import './filmDetails.less';

const FilmDetails = () => (
  <div className="film-details">
    <div className="film-details__image-container">
      <img className="film-details__image" src="https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782" alt="" />
    </div>
    <div className="film-details__main">
      <div className="film-details__title">Pulp Fiction</div>
      <div className="film-details__subtitle">Oscar-winning Movies</div>
      <div className="film-details__info">
        <span>1994</span>
        <span className="film-details__duration">154 min</span>
      </div>
      <div className="film-details__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at tempor lectus. Nam porttitor scelerisque enim, ac posuere diam tincidunt vel. Donec ullamcorper fermentum egestas. Sed elit tellus, euismod et ex a, fermentum tincidunt nulla. Sed at lectus neque. Vestibulum lacinia sed lorem eu bibendum. Duis ante ex, dignissim vel sollicitudin at, ultrices bibendum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus scelerisque lectus neque, eu accumsan metus auctor placerat. Sed nisi felis, elementum vel est quis, faucibus elementum dolor. Maecenas a dictum ligula, vitae cursus neque. Nunc sollicitudin sodales feugiat. Vivamus consequat at tortor quis aliquam. Fusce et egestas quam, sed vehicula ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
  </div>
);

export default FilmDetails;
