import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import SearchEmpty from 'Common/searchEmpty/searchEmpty';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SearchEmpty />', () => {
  it('renders <SearchEmpty /> components', () => {
    const wrapper = shallow(<SearchEmpty />);
    expect(wrapper.find('.search-empty')).to.have.lengthOf(1);
    expect(wrapper.find('.search-empty').first().text()).to.equal('No films found');
  });
});
