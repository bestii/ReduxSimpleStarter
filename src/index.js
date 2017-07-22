import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAT2I_wl1vRYj5J_34M0LQbzWXz-kHwcK4';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state={ videos: []};

    YTSearch({ key: API_KEY, term: 'surfboards' },(videos) => {
      // This is a ES6 shorthand of assigning videos : videos ( used when both property name and value name are same)
      this.setState({videos});
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  };

};

// take this component's generated HTML and put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));