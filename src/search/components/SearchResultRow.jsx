import React from 'react';
import moment from 'moment';
const SearchResultRow = ({ flightData, flightTypeUrl }) => {
  let flight = null;

  if (flightTypeUrl === '/departures') {
    flight = {
      terminal: flightData.term,
      localTime: moment(flightData.timeDepShedule).format('HH:mm'),
      destination: flightData['airportToID.city_en'],
      status: `Departed at ${moment(flightData.timeTakeofFact).format('HH:mm')}`,
      airlineLogo: flightData.airline.en.logoSmallName,
      airlineName: flightData.airline.en.name,
      flight: flightData['carrierID.IATA']
        ? `${flightData['carrierID.IATA']}${flightData.fltNo}`
        : `${flightData['carrierID.code']}${flightData.fltNo}`,
    };
  }

  if (flightTypeUrl === '/arrivals') {
    flight = {
      terminal: flightData.term,
      localTime: moment(flightData.timeStandCalc).format('HH:mm'),
      destination: flightData['airportFromID.city_en'],
      status: `Landed ${moment(flightData.timeStandFact).format('HH:mm')}`,
      airlineLogo: flightData.airline.en.logoSmallName,
      airlineName: flightData.airline.en.name,
      flight: flightData['carrierID.IATA']
        ? `${flightData['carrierID.IATA']}${flightData.fltNo}`
        : `${flightData['carrierID.code']}${flightData.fltNo}`,
    };
  }

  return (
    <tr>
      <td className="terminal-field">
        <span className={flight.terminal === 'A' ? 'term-a' : 'term-d'}>{flightData.term}</span>
      </td>
      <td className="time-field">
        <span>{flight.localTime}</span>
      </td>
      <td className="way-field">
        <span>{flight.destination}</span>
      </td>
      <td className="status-field">
        <span>{flight.status}</span>
      </td>
      <td className="company-field">
        <div className="company-field__logo">
          <img src={flight.airlineLogo} alt="Wizz Air" />
        </div>
        {/* <company-field_name> */}
        <span>{flight.airlineName}</span>
        {/* </company-field_name> */}
      </td>
      <td className="flight-field">
        <span>{flight.flight}</span>
      </td>
    </tr>
  );
};

export default SearchResultRow;
