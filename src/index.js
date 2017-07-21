import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAT2I_wl1vRYj5J_34M0LQbzWXz-kHwcK4';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

// take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));