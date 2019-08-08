import React, {Component} from 'react';
import './App.css';
import Search from './Components/Search';
import Artist from './Components/Artist';
import TrackList from './Components/TrackList';

const apiURL = 'https://spotify-api-wrapper.appspot.com';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      artist: [],
      artistID: "",
      tracks: [],
      isSearch : false,
      isErr: false,
      errText: "",
      trackPageTitle: "Şarkı Listesi"
    }
  }

  searchArtist = (artistName) => {
    const artist = artistName;
    fetch(apiURL + "/artist/" + artist).then((response) => {
      return response.json();
    }).then((response) => {
      this.setState({
        artist: response.artists.items,
        artistID: response.artists.items[0].id,
        isErr: false
      });
      //console.log(response.artists.items[0].id)
      //console.log(apiURL + "/artist/" + this.state.artistID + "/" + "top-tracks")
      fetch(apiURL + "/artist/" + this.state.artistID + "/" + "top-tracks").then((response) => {
        return response.json();
      }).then((response) => {
        this.setState({
          tracks: response.tracks,
          isSearch: true,
          isErr: false
        });
      });

    }).catch((error) => {
      console.error('Error:', error);
      this.setState({
        isErr: true,
        errText: "Sonuç bulunamadı."
      });
    })

  }

  render() {
    return (
      <div className="App"> 
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} isErr= {this.state.isErr} errText= {this.state.errText} />
        <TrackList trackList={this.state.tracks} pageTitle={this.state.trackPageTitle} isSearch= {this.state.isSearch} isErr= {this.state.isErr} errText= {this.state.errText} />
      </div>
    );
  }
}

export default App