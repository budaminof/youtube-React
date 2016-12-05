import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCCxViVe7c5DApoDIpCpxI5dtEl6Xx-19c';
// const API_KEY = 'AIzaSyBVLXNNekLd7NZgtQ0I0632e1ujNmpHAJs';

// create a new component.
// this produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      // ES6 { videos: videos } - works when key and propery are the same veriable name.
      // when ever setting state the component renders again.
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  // every class component needs a render method.
  // passing prop videos to VideoList.
  // passing onVideoSelect from App to VideoList to VideoListItem
  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
//take this component's generated HTML and put in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));
