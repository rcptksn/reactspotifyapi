import React, { Component } from 'react'

class Search extends Component {

    constructor(props){
        super(props);
        
        this.state= {
            artistName: ""
        }
    }

    onChangeName = event => {
        this.setState({
            artistName : event.target.value
        });
    }

    handleKeyPress = event => {
        if(event.key === 'Enter'){
          this.searchArtist();
        }
      }
    
    searchArtist = () => {
        this.props.searchArtist(this.state.artistName);
    }

    render() {
        return (
            <div className="searchForm">
                <h4>Şarkıcı adı giriniz</h4>
                <p>Aşağıdaki form aracılığıyla sevdiğiniz sanatçıları arayabilir, ve şarkılarını dinleyebilirsiniz.</p>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Şarkıcı..." value={this.state.artistName} onChange={this.onChangeName} onKeyPress={this.handleKeyPress} />
                    <div className="input-group-append">
                        <button type="submit" className="btn btn-secondary" onClick={this.searchArtist}>Albümleri Getir</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search;