import React from 'react';
import SearchAction from './SearchAction';
import SearchResult from './SearchResult';
const SearchFlight = () => {
  return (
    <section className="search-flight">
      <div className="search-page">
        <SearchAction />
        <SearchResult />
      </div>
    </section>
  );
};

export default SearchFlight;
