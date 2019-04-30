import { connect } from 'react-redux';
import FilmDetails from './filmDetails';

export default connect(state => state.filmDetails.data)(FilmDetails);
