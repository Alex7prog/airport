import React from 'react';
import SearchResultRow from './SearchResultRow';
import { useLocation, useSearchParams } from 'react-router-dom';

const SearchResultTable = ({ searchList }) => {
  const flightTypeUrl = useLocation().pathname;
  console.log('flightTypeUrl: ', flightTypeUrl);
  console.log('useLocation(): ', useLocation());
  console.log('useLocation(): ', useLocation().search);

  // let [searchParams, setSearchParams] = useSearchParams();
  // console.log(useSearchParams());

  const flightList = flightTypeUrl === '/departures' ? searchList.departure : searchList.arrival;

  return (
    <div className="search-result__content">
      <table className="search-result__table">
        <thead>
          <tr>
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <tbody>
          {flightList.map((flight) => (
            <SearchResultRow key={flight.ID} flightData={flight} flightTypeUrl={flightTypeUrl} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResultTable;
