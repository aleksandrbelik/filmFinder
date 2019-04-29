import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import FilmDetails from 'Common/filmDetails/filmDetails';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<FilmDetails />', () => {
  it('renders <FilmDetails /> components', () => {
    const wrapper = shallow(<FilmDetails />);
    expect(wrapper.find('.film-details')).to.have.lengthOf(1);
  });

  it('renders <FilmCard /> components with default data', () => {
    const wrapper = shallow(<FilmDetails />);
    expect(wrapper.find('.film-details__image-container')).to.have.lengthOf(1);

    expect(wrapper.find('.film-details__image')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__image').first().props().src).to.equal('https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782');

    expect(wrapper.find('.film-details__main')).to.have.lengthOf(1);

    expect(wrapper.find('.film-details__title')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__title').first().text()).to.equal('Pulp Fiction');

    expect(wrapper.find('.film-details__subtitle')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__subtitle').first().text()).to.equal('Oscar-winning Movies');

    expect(wrapper.find('.film-details__info')).to.have.lengthOf(1);

    expect(wrapper.find('.film-details__year')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__year').first().text()).to.equal('1994');

    expect(wrapper.find('.film-details__duration')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__duration').first().text()).to.equal('154 min');

    expect(wrapper.find('.film-details__description')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__description').first().text()).to.equal('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at tempor lectus. Nam porttitor scelerisque enim, ac posuere diam tincidunt vel. Donec ullamcorper fermentum egestas. Sed elit tellus, euismod et ex a, fermentum tincidunt nulla. Sed at lectus neque. Vestibulum lacinia sed lorem eu bibendum. Duis ante ex, dignissim vel sollicitudin at, ultrices bibendum arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus scelerisque lectus neque, eu accumsan metus auctor placerat. Sed nisi felis, elementum vel est quis, faucibus elementum dolor. Maecenas a dictum ligula, vitae cursus neque. Nunc sollicitudin sodales feugiat. Vivamus consequat at tortor quis aliquam. Fusce et egestas quam, sed vehicula ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
  });

  it('renders <FilmCard /> components with custom data', () => {
    const props = {
      title: 'testTitle',
      subtitle: 'testSubtitle',
      year: 'testYear',
      duration: 'testDuration',
      description: 'testDescription',
      imgSrc: 'testImgSrc'
    };

    const wrapper = shallow(<FilmDetails {...props} />);
    expect(wrapper.find('.film-details__image-container')).to.have.lengthOf(1);

    expect(wrapper.find('.film-details__image')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__image').first().props().src).to.equal(props.imgSrc);

    expect(wrapper.find('.film-details__main')).to.have.lengthOf(1);

    expect(wrapper.find('.film-details__title')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__title').first().text()).to.equal(props.title);

    expect(wrapper.find('.film-details__subtitle')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__subtitle').first().text()).to.equal(props.subtitle);

    expect(wrapper.find('.film-details__info')).to.have.lengthOf(1);

    expect(wrapper.find('.film-details__year')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__year').first().text()).to.equal(props.year);

    expect(wrapper.find('.film-details__duration')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__duration').first().text()).to.equal(props.duration);

    expect(wrapper.find('.film-details__description')).to.have.lengthOf(1);
    expect(wrapper.find('.film-details__description').first().text()).to.equal(props.description);
  });
});
