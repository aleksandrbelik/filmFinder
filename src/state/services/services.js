import axios from 'axios';

export const searchFilms = params => axios({
  method:'get',
  url:'https://reactjs-cdp.herokuapp.com/movies',
  params
});

export const loadFilmDetails = id => axios({
  method:'get',
  url:`https://reactjs-cdp.herokuapp.com/movies/${id}`
});