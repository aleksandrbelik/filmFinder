import { connect } from 'react-redux';
import { compose } from 'recompose';
import { searchFilms as searchFilmsAction } from 'State/list';
import PreLoad from 'Components/hoc/preLoad/preLoad';
import FilmsList from 'Common/filmsList/filmsListContainer';

export default compose(
  connect(null, (dispatch, { genre }) => ({
    loadFilmBygenre: () => {
      dispatch(searchFilmsAction({ filter: genre, search: '' }));
    }
  })),
  PreLoad(({ loadFilmBygenre }) => loadFilmBygenre())
)(FilmsList);
