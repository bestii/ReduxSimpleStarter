import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAT2I_wl1vRYj5J_34M0LQbzWXz-kHwcK4';

YTSearch({ key: API_KEY, term: 'surfboard' }, function (data) {
  console.log(data);
});

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state={ video: []};
  }
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  };

};

// take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));