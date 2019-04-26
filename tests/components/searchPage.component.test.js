import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import SearchPage from 'Components/pages/searchPage/searchPage';
import Page from 'Common/page/page';
import SearchForm from 'Common/searchForm/searchFormContainer';
import Sorting from 'Common/sorting/sortingContainer';
import FilmsList from 'Common/filmsList/filmsList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SearchPage />', () => {
  it('renders <SearchPage /> components', () => {
    const wrapper = shallow(<SearchPage />);
    expect(wrapper.find(Page)).to.have.lengthOf(1);
    expect(wrapper.find(Page).props().isFilmDetails).to.equal(false);
  });

  it('renders <SearchPage /> component with childs', () => {
    const wrapper = mount(<SearchPage />);
    expect(wrapper.find(SearchForm)).to.have.lengthOf(1);
    expect(wrapper.find(Sorting)).to.have.lengthOf(1);
    expect(wrapper.find(FilmsList)).to.have.lengthOf(1);
  });
});
