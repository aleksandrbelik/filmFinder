import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import SearchFormContainer from 'Common/searchForm/searchFormContainer';
import SearchForm from 'Common/searchForm/searchForm';
import { FILTER_TITLE, FILTER_GENRE } from 'Common/searchForm/searchFormHelpers';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SearchFormContainer />', () => {
  it('renders <SearchFormContainer /> components', () => {
    const wrapper = shallow(<SearchFormContainer />);
    const instance = wrapper.instance();
    expect(instance.state.filter).to.equal(FILTER_TITLE);
    expect(instance.state.value).to.equal('');
  });

  it('renders <SearchForm /> component', () => {
    const wrapper = shallow(<SearchFormContainer />);
    const instance = wrapper.instance();
    expect(wrapper.find(SearchForm)).to.have.lengthOf(1);
    expect(wrapper.find(SearchForm).props().value).to.equal('');
    expect(wrapper.find(SearchForm).props().filter).to.equal(FILTER_TITLE);
    expect(wrapper.find(SearchForm).props().onSubmit).to.equal(instance.onSubmit);
    expect(wrapper.find(SearchForm).props().onChange).to.equal(instance.onInputChange);
    expect(wrapper.find(SearchForm).props().onFilterTitleClick)
      .to.equal(instance.onFilterTitleClick);
    expect(wrapper.find(SearchForm).props().onFilterGenreClick)
      .to.equal(instance.onFilterGenreClick);
  });

  it('renders <SearchFormContainer /> component with changed state { filter } to FILTER_GENRE', () => {
    const wrapper = shallow(<SearchFormContainer />);
    const instance = wrapper.instance();
    expect(instance.state.filter).to.equal(FILTER_TITLE);

    instance.onFilterGenreClick();
    expect(instance.state.filter).to.equal(FILTER_GENRE);
  });

  it('renders <SearchFormContainer /> component with changed state { filter } to FILTER_GENRE and to FILTER_TITLE', () => {
    const wrapper = shallow(<SearchFormContainer />);
    const instance = wrapper.instance();
    expect(instance.state.filter).to.equal(FILTER_TITLE);

    instance.onFilterGenreClick();
    expect(instance.state.filter).to.equal(FILTER_GENRE);

    instance.onFilterTitleClick();
    expect(instance.state.filter).to.equal(FILTER_TITLE);
  });

  it('renders <SearchFormContainer /> component with changed state { value } to new string', () => {
    const wrapper = shallow(<SearchFormContainer />);
    const instance = wrapper.instance();
    expect(instance.state.value).to.equal('');
    const e = { target: { value: 'newValue' } };

    instance.onInputChange(e);
    expect(instance.state.value).to.equal(e.target.value);
  });
});
