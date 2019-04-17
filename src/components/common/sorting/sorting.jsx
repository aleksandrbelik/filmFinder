import React from 'react';
import './sorting.less';

const Sorting = () => (
  <div className="sorting">
    <div>7 movies found</div>
    <div>
      <span>Sort by</span>
      <button className="sorting__button" type="button">release date</button>
      <button className="sorting__button" type="button">rating</button>
    </div>
  </div>
);

export default Sorting;