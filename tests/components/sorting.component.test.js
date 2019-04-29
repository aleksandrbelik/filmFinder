import React from 'react';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, configure } from 'enzyme';
import Sorting from 'Common/sorting/sorting';
import { SORT_RELEASE_DATE, SORT_RATING } from 'Common/sorting/sortingHelpers';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Sorting />', () => {
  const props = {
    onSortReleaseDateClick: sinon.spy(),
    onSortRatingClick: sinon.spy(),
    sort: SORT_RELEASE_DATE
  };

  it('renders <Sorting /> components', () => {
    const wrapper = shallow(<Sorting {...props} />);
    expect(wrapper.find('.sorting')).to.have.lengthOf(1);
  });

  it('renders <Sorting /> with data', () => {
    const wrapper = shallow(<Sorting {...props} />);

    expect(wrapper.find('.sorting__found')).to.have.lengthOf(1);
    expect(wrapper.find('.sorting__found').first().text()).to.equal('7 movies found');

    expect(wrapper.find('.sorting__controls')).to.have.lengthOf(1);

    expect(wrapper.find('.sorting__controls__label')).to.have.lengthOf(1);
    expect(wrapper.find('.sorting__controls__label').first().text()).to.equal('Sort by');

    expect(wrapper.find('.sorting__button')).to.have.lengthOf(2);
  });

  it('renders <Sorting /> component with Release Date filter button', () => {
    const wrapper = shallow(<Sorting {...props} />);
    const button = wrapper.find('.sorting__button').first();

    expect(button.props().type).to.equal('button');
    expect(button.text()).to.equal('release date');

    button.simulate('click');
    expect(props.onSortReleaseDateClick).to.have.property('callCount', 1);
  });

  it('renders <Sorting /> component with Rating filter button', () => {
    const wrapper = shallow(<Sorting {...props} />);
    const button = wrapper.find('.sorting__button').at(1);

    expect(button.props().type).to.equal('button');
    expect(button.text()).to.equal('rating');

    button.simulate('click');
    expect(props.onSortRatingClick).to.have.property('callCount', 1);
  });

  it('renders <Sorting /> component with Release Date active button', () => {
    const wrapper = shallow(<Sorting {...props} />);
    const releaseDateButton = wrapper.find('.sorting__button').first();
    const ratingButton = wrapper.find('.sorting__button').at(1);

    expect(releaseDateButton.hasClass('is-active')).to.equal(true);
    expect(ratingButton.hasClass('is-active')).to.equal(false);
  });

  it('renders <Sorting /> component with Release Date active button', () => {
    const wrapper = shallow(<Sorting {...props} sort={SORT_RATING} />);
    const releaseDateButton = wrapper.find('.sorting__button').first();
    const ratingButton = wrapper.find('.sorting__button').at(1);

    expect(releaseDateButton.hasClass('is-active')).to.equal(false);
    expect(ratingButton.hasClass('is-active')).to.equal(true);
  });
});
