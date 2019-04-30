import { connect } from 'react-redux';
import { setFilmId } from 'State/filmDetails';
import FilmCard from './filmCard';

export default connect(null, dispatch => ({
  onFilmCardClick: id => {
    dispatch(setFilmId(id));
  }
}), (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  onClick: () => {
    dispatchProps.onFilmCardClick(ownProps.id);
  }
}))(FilmCard);
