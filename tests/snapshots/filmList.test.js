import React from 'react';
import FilmsList from 'Common/filmsList/filmsList';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<FilmsList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly for one film in the list', () => {
  const tree = renderer
    .create(<FilmsList films={[
      {
        name: 'bla bla la ',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      }
    ]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly for five film in the list', () => {
  const tree = renderer
    .create(<FilmsList films={[
      {
        name: 'bla bla la ',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      },
      {
        name: 'bla bla la 1',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      },
      {
        name: 'bla bla la 2',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      },
      {
        name: 'bla bla la 3',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      },
      {
        name: 'bla bla la 4',
        genre: 'ssdfsdfsdfdsf',
        year: '2004',
        imgSrc: 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782'
      }
    ]}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
