import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import SearchFlight from './search/components/SearchFlight';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchFlight />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
