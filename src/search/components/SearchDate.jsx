import React, { useRef } from 'react';

const SearchDate = ({ dateSearchInput }) => {
  const inputEl = useRef(null);

  const handleInput = (e) => {
    e.preventDefault();
    console.log('e: ', e.target.value);
    console.log(inputEl.current.value);
  };

  return (
    <div className="search-result__calendar">
      <div className="search-result__calendar__date">
        <label htmlFor="search-date">11/01</label>
        <div className="calendar-ico" id="search-date">
          <i className="fas fa-calendar-days"></i>
          <input className="search-calendar_datapicker" type="date" onInput={dateSearchInput} />
        </div>
      </div>
      <div className="search-result__calendar__dates">
        <div className="date-yesterday">yesterday</div>
        <div className="date-today">today</div>
        <div className="date-tomorrow">tomorrow</div>
      </div>
    </div>
  );
};

export default SearchDate;
