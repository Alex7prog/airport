import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import moment from 'moment';

import * as searchActions from '../search.actions';
import { searchListSelector } from '../search.selectors';

import SearchNavigation from './SearchNavigation';
import SearchDate from './SearchDate';
import SearchResultsTable from './SearchResultsTable';
import SearchNavArrivals from './SearchNavArrivals';

const SearchResult = ({ searchList, getSearchList }) => {
  const currentDate = new Date();
  const [path, setPath] = useState('/departures?date=11-01-2022');

  // const [searchTime, setSearchTime] = useState(new Date());
  // const [searchFlight, setSearchFlight] = useState('');

  // console.log('searchList: ', searchList);
  // // console.log('getSearchList: ', getSearchList);
  // // console.log('searchList: ', search);
  // if (searchList.body) {
  //   console.log(222);
  //   const { departure } = searchList.body;
  //   console.log('departure: ', departure);
  // }

  const handleDateSearch = (e) => {
    // console.log(inputDate.current);
    // console.log('e target: ', e.target);
    const date = e.target.value;
    // console.log(date);
    const newDate = new Date(date);
    // console.log('newDate: ', newDate);
    // console.log(moment(newDate).format('DD-MM-YYYY'));
    // console.log(date.split('-').reverse().join('-'));
    // const d = path + '?date=' + moment(newDate).format('DD-MM-YYYY');
    // console.log(d);
    // setPath(d);
    getSearchList(newDate);
  };

  useEffect(() => {
    getSearchList(new Date('01-11-2022'));
  }, []);

  // console.log('props', body);

  console.log(searchList);
  console.log('path: ', path);
  return (
    <div className="search-result">
      {/* <BrowserRouter> */}
      {/* <Routes> */}
      {/* <Route exact path="/"></Route> */}
      <Redirect to={path}>
        <SearchNavigation />
      </Redirect>

      {/* <Route path={path}> */}
      <SearchNavigation />
      {/* </Route> */}
      {/* <Route path="/arrivals">
        <SearchNavigation />
      </Route> */}

      {/* <Route path="/arrivals" component={SearchNavArrivals} /> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}

      <SearchDate dateSearchInput={handleDateSearch} />
      {searchList && <SearchResultsTable searchList={searchList.body} />}
    </div>
  );
};

const mapDispatch = {
  getSearchList: searchActions.getSearchList,
};

const mapState = (state) => {
  return {
    searchList: searchListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(SearchResult);

// console.log('props: ', props);
// const { search } = props;

// let searchList = null;

// const list = props.search.body;
// console.log('list >>>> ', list);
// console.log('list: ', typeof list);
// if (props.search.body) {
//   // console.log(Object.keys(list));
//   // console.log(Object.values(list));
//   console.log(list.departure);
//   searchList = list.departure;
// }
