import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCCxViVe7c5DApoDIpCpxI5dtEl6Xx-19c';

// create a new component.
//this produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, videos => {
      // ES6 { videos: videos } - works when key and propery are the same veriable name.
      this.setState({ videos });
    });
  }
  // every class component needs a render method.
  // passing prop videos to VideoList.
  render () {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
//take this component's generated HTML and put in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
