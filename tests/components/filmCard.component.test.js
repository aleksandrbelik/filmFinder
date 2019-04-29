import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import FilmCard from 'Common/filmCard/filmCard';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<FilmCard />', () => {
  const props = {
    name: 'testName',
    genre: 'testGenre',
    year: 'testYear',
    imgSrc: 'testImgSrc'
  };

  it('renders <FilmCard /> components', () => {
    const wrapper = shallow(<FilmCard {...props} />);
    expect(wrapper.find('.film-card')).to.have.lengthOf(1);
  });

  it('renders <FilmCard /> components with data', () => {
    const wrapper = shallow(<FilmCard {...props} />);
    expect(wrapper.find('.film-card__image')).to.have.lengthOf(1);
    expect(wrapper.find('.film-card__image').first().props().src).to.equal(props.imgSrc);
    expect(wrapper.find('.film-card__info')).to.have.lengthOf(1);
    expect(wrapper.find('.film-card__name')).to.have.lengthOf(1);
    expect(wrapper.find('.film-card__name').first().text()).to.equal(props.name);
    expect(wrapper.find('.film-card__year')).to.have.lengthOf(1);
    expect(wrapper.find('.film-card__year').first().text()).to.equal(props.year);
    expect(wrapper.find('.film-card__genre')).to.have.lengthOf(1);
    expect(wrapper.find('.film-card__genre').first().text()).to.equal(props.genre);
  });
});
