import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from 'Common/filmCard/filmCard';
import SearchEmpty from 'Common/searchEmpty/searchEmpty';
import './filmsList.less';

const FilmList = ({ films }) => (
  <div className="film-list">
    {
      !!films.length && films.map(film => (
        <FilmCard key={film.name} {...film} />
      ))
    }
    {
      !films.length && (
        <SearchEmpty />
      )
    }
  </div>
);

FilmList.propTypes = {
  films: PropTypes.array
};

FilmList.defaultProps = {
  films: [
    {
      name: 'bla bla la ',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 1',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 2',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 3',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 4',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 5',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 6',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 7',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 8',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 9',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 10',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 11',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    },
    {
      name: 'bla bla la 12',
      genre: 'ssdfsdfsdfdsf',
      year: '2004',
      imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
    }
  ]
};

export default FilmList;
