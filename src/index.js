import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCCxViVe7c5DApoDIpCpxI5dtEl6Xx-19c';

// create a new component.
//this produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}
//take this componenet's generated HTML and put in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
