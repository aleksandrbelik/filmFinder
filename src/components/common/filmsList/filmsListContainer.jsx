import { connect } from 'react-redux';
import FilmsList from './filmsList';

export default connect(state => ({
  isFetched: state.list.isFetched,
  list: state.list.searchResults.data
}))(FilmsList);
