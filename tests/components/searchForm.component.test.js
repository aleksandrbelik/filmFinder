import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import SearchForm from 'Common/searchForm/searchForm';
import { FILTER_TITLE, FILTER_GENRE } from 'Common/searchForm/searchFormHelpers';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SearchForm />', () => {
  const props = {
    onSubmit: sinon.spy(),
    onChange: sinon.spy(),
    value: 'value',
    filter: FILTER_GENRE,
    onFilterTitleClick: sinon.spy(),
    onFilterGenreClick: sinon.spy()
  };

  it('renders <SearchForm /> components', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    expect(wrapper.find('.search-form')).to.have.lengthOf(1);
  });

  it('renders <SearchForm /> with data', () => {
    const wrapper = shallow(<SearchForm {...props} />);

    expect(wrapper.find('.search-form__label')).to.have.lengthOf(1);
    expect(wrapper.find('.search-form__label').first().text()).to.equal('FIND YOUR MOVIE');

    expect(wrapper.find('.search-form__input')).to.have.lengthOf(1);
    expect(wrapper.find('.search-form__controls')).to.have.lengthOf(1);
    expect(wrapper.find('.search-form__filter')).to.have.lengthOf(1);

    expect(wrapper.find('.search-form__filter__label')).to.have.lengthOf(1);
    expect(wrapper.find('.search-form__filter__label').first().text()).to.equal('SEARCH BY');

    expect(wrapper.find('.search-form__filter__btn')).to.have.lengthOf(2);

    expect(wrapper.find('.search-form__button')).to.have.lengthOf(1);
  });

  it('renders <SearchForm /> component with Search input', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    const input = wrapper.find('.search-form__input');

    expect(input.first().props().type).to.equal('text');
    expect(input.first().props().value).to.equal(props.value);

    input.simulate('change');
    expect(props.onChange).to.have.property('callCount', 1);
  });

  it('renders <SearchForm /> component with Title filter button', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    const button = wrapper.find('.search-form__filter__btn').first();

    expect(button.props().type).to.equal('button');
    expect(button.text()).to.equal('TITLE');

    button.simulate('click');
    expect(props.onFilterTitleClick).to.have.property('callCount', 1);
  });

  it('renders <SearchForm /> component with Genre filter button', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    const button = wrapper.find('.search-form__filter__btn').at(1);

    expect(button.props().type).to.equal('button');
    expect(button.text()).to.equal('GENRE');

    button.simulate('click');
    expect(props.onFilterGenreClick).to.have.property('callCount', 1);
  });

  it('renders <SearchForm /> component with Search button', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    const button = wrapper.find('.search-form__button');

    expect(button.first().props().type).to.equal('submit');
    expect(button.first().props().value).to.equal('SEARCH');
  });

  it('renders <SearchForm /> component with submitted form', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    const form = wrapper.find('.search-form');

    form.simulate('submit');
    expect(props.onSubmit).to.have.property('callCount', 1);
  });

  it('renders <SearchForm /> component with Genre active button', () => {
    const wrapper = shallow(<SearchForm {...props} />);
    const titleButton = wrapper.find('.search-form__filter__btn').first();
    const genreButton = wrapper.find('.search-form__filter__btn').at(1);

    expect(titleButton.hasClass('is-active')).to.equal(false);
    expect(genreButton.hasClass('is-active')).to.equal(true);
  });

  it('renders <SearchForm /> component with Title active button', () => {
    const wrapper = shallow(<SearchForm {...props} filter={FILTER_TITLE} />);
    const titleButton = wrapper.find('.search-form__filter__btn').first();
    const genreButton = wrapper.find('.search-form__filter__btn').at(1);

    expect(titleButton.hasClass('is-active')).to.equal(true);
    expect(genreButton.hasClass('is-active')).to.equal(false);
  });
});
