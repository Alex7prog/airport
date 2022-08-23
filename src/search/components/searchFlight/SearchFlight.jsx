import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import moment from 'moment';

import * as searchActions from '../../search.actions';
import { flightListSelector } from '../../search.selectors';

import SearchBar from '../searchBar/SearchBar';
import SearchNavigation from '../searchNavigation/SearchNavigation';
import SearchDateSelector from '../searchDateSelector/SearchDateSelector';
import SearchResultsTable from '../searchResultsTable/SearchResultsTable';

import './search-flight.scss';

const SearchFlight = ({ searchList, getSearchList }) => {
  const currentDate = new Date();

  const [flightType, setFlightType] = useState('/departures');
  const [flightDate, setFlightDate] = useState(moment(currentDate).format('DD-MM-YYYY'));
  const [flightSearch, setFlightSearch] = useState('');

  const handleFlightType = (type) => {
    setFlightType(type);
  };

  const handleParametresSearch = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if (!formData.search) {
      setFlightSearch(``);
      return;
    }

    setFlightSearch(formData.search);
  };

  const handleDateSearch = (e) => {
    const date = new Date(e.target.value);
    setFlightDate(moment(date).format('DD-MM-YYYY'));
    getSearchList(date);
  };

  const handleThreeDays = (e) => {
    const date = new Date(e.target.closest('.three-days').dataset.date);
    setFlightDate(moment(date).format('DD-MM-YYYY'));
    getSearchList(date);
  };

  useEffect(() => {
    getSearchList(currentDate);
  }, []);

  return (
    <section className="search-flight">
      <div className="search-page">
        <SearchBar onParametresSearch={handleParametresSearch} />

        <div className="search-result">
          <Redirect to={`${flightType}?date=${flightDate}${flightSearch && `&search=${flightSearch}`}`} />

          <Route path={'/departures'}>
            <SearchNavigation selectFlightType={handleFlightType} />
          </Route>
          <Route path={'/arrivals'}>
            <SearchNavigation selectFlightType={handleFlightType} />
          </Route>

          <SearchDateSelector dateSearchInput={handleDateSearch} selectThreeDays={handleThreeDays} />
          {searchList && <SearchResultsTable searchList={searchList.body} />}
        </div>
      </div>
    </section>
  );
};

const mapDispatch = {
  getSearchList: searchActions.getSearchList,
};

const mapState = (state) => {
  return {
    searchList: flightListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(SearchFlight);
