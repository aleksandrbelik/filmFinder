import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import SortingContainer from 'Common/sorting/sortingContainer';
import Sorting from 'Common/sorting/sorting';
import { SORT_RELEASE_DATE, SORT_RATING } from 'Common/sorting/sortingHelpers';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SortingContainer />', () => {
  it('renders <SortingContainer /> components', () => {
    const wrapper = shallow(<SortingContainer />);
    const instance = wrapper.instance();
    expect(instance.state.sort).to.equal(SORT_RELEASE_DATE);
  });

  it('renders <Sorting /> component', () => {
    const wrapper = shallow(<SortingContainer />);
    const instance = wrapper.instance();
    expect(wrapper.find(Sorting)).to.have.lengthOf(1);
    expect(wrapper.find(Sorting).props().sort).to.equal(SORT_RELEASE_DATE);
    expect(wrapper.find(Sorting).props().onSortReleaseDateClick)
      .to.equal(instance.onSortReleaseDateClick);
    expect(wrapper.find(Sorting).props().onSortRatingClick).to.equal(instance.onSortRatingClick);
  });

  it('renders <SortingContainer /> component with changed state { sort } to SORT_RATING', () => {
    const wrapper = shallow(<SortingContainer />);
    const instance = wrapper.instance();
    expect(instance.state.sort).to.equal(SORT_RELEASE_DATE);

    instance.onSortRatingClick();
    expect(instance.state.sort).to.equal(SORT_RATING);
  });

  it('renders <SortingContainer /> component with changed state { sort } to SORT_RATING and to SORT_RELEASE_DATE', () => {
    const wrapper = shallow(<SortingContainer />);
    const instance = wrapper.instance();
    expect(instance.state.sort).to.equal(SORT_RELEASE_DATE);

    instance.onSortRatingClick();
    expect(instance.state.sort).to.equal(SORT_RATING);

    instance.onSortReleaseDateClick();
    expect(instance.state.sort).to.equal(SORT_RELEASE_DATE);
  });
});
