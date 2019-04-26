import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import FilmList from 'Common/filmsList/filmsList';
import FilmCard from 'Common/filmCard/filmCard';
import SearchEmpty from 'Common/searchEmpty/searchEmpty';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<FilmList />', () => {
  it('renders <FilmList /> components', () => {
    const wrapper = shallow(<FilmList />);
    expect(wrapper.find('.film-list')).to.have.lengthOf(1);
  });

  it('should render SearchEmpty if no films', () => {
    const wrapper = shallow(<FilmList films={[]} />);
    expect(wrapper.find(SearchEmpty)).to.have.lengthOf(1);
    expect(wrapper.find(FilmCard)).to.have.lengthOf(0);
  });

  it('should render FilmCard for 1 film', () => {
    const wrapper = shallow(<FilmList films={[
      {
        name: 'bla bla la ',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      }
    ]}
    />);
    expect(wrapper.find(SearchEmpty)).to.have.lengthOf(0);
    expect(wrapper.find(FilmCard)).to.have.lengthOf(1);
  });
});
