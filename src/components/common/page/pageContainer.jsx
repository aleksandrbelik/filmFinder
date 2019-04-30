import { connect } from 'react-redux';
import { setFilmId } from 'State/filmDetails';
import Page from './page';

export default connect(null, dispatch => ({
  onSearchClick: () => {
    dispatch(setFilmId(null));
  }
}))(Page);
