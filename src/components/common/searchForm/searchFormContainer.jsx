import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchFilms } from 'State/list';
import SearchForm from './searchForm';
import { searchTypes } from 'State/list';

class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFilterTitleClick = this.onFilterTitleClick.bind(this);
    this.onFilterGenreClick = this.onFilterGenreClick.bind(this);
  }

  onInputChange({ target: { value } }) {
    this.setState({ search: value });
  }

  onFilterTitleClick() {
    const { search } = this.state;
    this.props.searchFilms({
      search,
      searchBy: searchTypes.TITLE
    });
  }

  onFilterGenreClick() {
    const { search } = this.state;
    this.props.searchFilms({
      search,
      searchBy: searchTypes.GENRE
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const { search } = this.state;
    this.props.searchFilms({ search });
  }

  render() {
    const { search } = this.state;
    const { filter, theme } = this.props;
    return (
      <SearchForm
        onSubmit={this.onSubmit}
        onChange={this.onInputChange}
        value={search}
        filter={filter}
        onFilterTitleClick={this.onFilterTitleClick}
        onFilterGenreClick={this.onFilterGenreClick}
        theme={theme}
      />
    );
  }
}

SearchForm.propTypes = {
  searchFilms: PropTypes.func,
  filter: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired
};

SearchForm.defaultProps = {
  searchFilms: null
};

export default connect(state => ({
  filter: state.list.filters.searchBy
}), dispatch => ({
  searchFilms: params => {
    dispatch(searchFilms(params));
  }
}))(SearchFormContainer);
