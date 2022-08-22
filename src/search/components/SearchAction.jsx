import React from 'react';

const SearchAction = () => {
  return (
    <div className="search-action">
      <h1 className="search-action__title">SEARCH FLIGHT</h1>
      <div className="search-action__bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input className="search-action__input" type="text" placeholder="Airline, destination or flight #" />
        <button className="search-action__btn">SEARCH</button>
      </div>
    </div>
  );
};

export default SearchAction;
