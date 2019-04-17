import React from 'react';
import ErrorBoundaryWrapper from 'Components/hoc/errorBoundary/errorBoundaryWrapper';
import SearchForm from './searchForm';
import { FILTER_TITLE, FILTER_GENRE } from './searchFormHelpers';

class SearchFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      filter: FILTER_TITLE
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFilterTitleClick = this.onFilterTitleClick.bind(this);
    this.onFilterGenreClick = this.onFilterGenreClick.bind(this);
  }

  onInputChange({ target: { value } }) {
    this.setState({ value });
  }

  onFilterTitleClick() {
    this.setState({ filter: FILTER_TITLE });
  }

  onFilterGenreClick() {
    this.setState({ filter: FILTER_GENRE });
  }

  onSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    console.log(value);
  }

  render() {
    const { value, filter } = this.state;
    return (
      <SearchForm
        onSubmit={this.onSubmit}
        onChange={this.onInputChange}
        value={value}
        filter={filter}
        onFilterTitleClick={this.onFilterTitleClick}
        onFilterGenreClick={this.onFilterGenreClick}
      />
    );
  }
}

export default ErrorBoundaryWrapper(SearchFormContainer);
