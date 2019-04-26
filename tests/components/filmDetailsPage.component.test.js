import React from 'react';
import { expect } from 'chai';
import { shallow, mount, configure } from 'enzyme';
import FilmDetailsPage from 'Components/pages/filmDetailsPage/filmDetailsPage';
import Page from 'Common/page/page';
import FilmDetails from 'Common/filmDetails/filmDetails';
import FilmsList from 'Common/filmsList/filmsList';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<FilmDetailsPage />', () => {
  it('renders <FilmDetailsPage /> components', () => {
    const wrapper = shallow(<FilmDetailsPage />);
    expect(wrapper.find(Page)).to.have.lengthOf(1);
    expect(wrapper.find(Page).props().isFilmDetails).to.equal(true);
  });

  it('renders <FilmDetailsPage /> component with childs', () => {
    const wrapper = mount(<FilmDetailsPage />);
    expect(wrapper.find(FilmDetails)).to.have.lengthOf(1);
    expect(wrapper.find(FilmsList)).to.have.lengthOf(1);
  });
});
