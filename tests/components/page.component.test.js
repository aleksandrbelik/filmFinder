import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Page from 'Common/page/page';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Page />', () => {
  it('renders <Page /> components', () => {
    const props = { header: 'header', content: 'content' };
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find('.page')).to.have.lengthOf(1);
  });

  it('renders <Page /> component as default', () => {
    const props = { header: 'header', content: 'content' };
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find('.page')).to.have.lengthOf(1);

    expect(wrapper.find('.page__header__name')).to.have.lengthOf(1);
    expect(wrapper.find('.page__header__name').first().text()).to.equal('netflixroulette');

    expect(wrapper.find('.page__header__cnt')).to.have.lengthOf(1);
    expect(wrapper.find('.page__header__cnt').first().text()).to.equal(props.header);

    expect(wrapper.find('.page__header-line')).to.have.lengthOf(1);
    expect(wrapper.find('.page__header-line').first().text()).to.equal('');

    expect(wrapper.find('.page__content')).to.have.lengthOf(1);
    expect(wrapper.find('.page__content').first().text()).to.equal(props.content);

    expect(wrapper.find('.page__footer')).to.have.lengthOf(1);
    expect(wrapper.find('.page__footer').first().text()).to.equal('netflixroulette');
  });

  it('renders <Page /> component without Search button', () => {
    const props = { header: 'header', content: 'content' };
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find('.page')).to.have.lengthOf(1);
    expect(wrapper.find('.is-film-details')).to.have.lengthOf(0);
    expect(wrapper.find('.page__header__button')).to.have.lengthOf(0);
  });

  it('renders <Page /> component with Search button', () => {
    const props = { header: 'header', content: 'content', isFilmDetails: true };
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find('.page')).to.have.lengthOf(1);
    expect(wrapper.find('.is-film-details')).to.have.lengthOf(1);

    expect(wrapper.find('.page__header__button')).to.have.lengthOf(1);
    expect(wrapper.find('.page__header__button').first().text()).to.equal('SEARCH');
  });

  it('renders <Page /> component with headerLine content', () => {
    const props = { header: 'header', content: 'content', headerLine: 'headerLine' };
    const wrapper = shallow(<Page {...props} />);
    expect(wrapper.find('.page__header-line')).to.have.lengthOf(1);
    expect(wrapper.find('.page__header-line').first().text()).to.equal(props.headerLine);
  });
});
