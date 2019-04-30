import { connect } from 'react-redux';
import { compose } from 'recompose';
import PreLoad from 'Components/hoc/preLoad/preLoad';
import { searchFilms as searchFilmsAction } from 'State/list';
import SearchPage from './searchPage';

export default compose(
  connect(state => ({
    isPending: state.list.isPending,
    isFetched: state.list.isFetched
  }), dispatch => ({
    searchFilms: () => {
      dispatch(searchFilmsAction({ filter: '' }));
    }
  })),
  PreLoad(({ searchFilms }) => searchFilms())
)(SearchPage);