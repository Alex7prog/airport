import moment from 'moment';

// const baseUrl = 'https://api.iev.aero/api/flights/11-01-2022';
const baseUrl = 'https://api.iev.aero/api/flights/';

export const fetchSearchList = (date) => {
  console.log('date: ', date);
  const formatDate = moment(date).format('DD-MM-YYYY');
  console.log(`${baseUrl}${formatDate}`);
  return fetch(`${baseUrl}${formatDate}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};
