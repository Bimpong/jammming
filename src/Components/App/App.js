import React, { Component } from 'react';
import './App.css';
import {SearchBar} from '../SearchBar/SearchBar';
import {SearchResults} from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import TrackList from '../TrackList/TrackList';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      searchResults: [
{name: 'Pop Heads', artist: 'Some Artist', album: 'some album'}, 
{name: 'some name', artist: 'Pu5i_Eater', album: 'another album'}, 
{name: 'another name', artist: 'another artist', album: 'R6 Tunes'}
]  
    }
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist />
            <TrackList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
