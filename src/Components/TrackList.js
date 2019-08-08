import React, { Component } from 'react'

class TrackList extends Component {
    constructor(props){
        super(props);
        this.state={
            isPlay : false,
            audioPlayer: null,
            previewURL: "",
        };
    }

    playAudio = audioURL => () => {
        const audioPlayer= new Audio(audioURL); 
    
        if(!this.state.isPlay){
            audioPlayer.play();
            this.setState({
                isPlay: true,
                audioPlayer: audioPlayer,
                previewURL: audioURL
            });
        }
        else{
            this.state.audioPlayer.pause();
            if(this.state.previewURL == audioURL){
                this.setState({ isPlay: false });
            }
            else{
                audioPlayer.play();
                this.setState({ audioPlayer: audioPlayer, previewURL: audioURL });
            }
        }
    }

    changeIcon = prevURL => {
        if (!prevURL) {
            return <i class="fas fa-times"></i>
        }
        if (this.state.isPlay && this.state.previewURL === prevURL) {
            return <i className="fas fa-pause"></i>
        }
        return <i className="fas fa-play"></i>
    }

    render() {
        const {trackList, pageTitle, isSearch, isErr, errText} = this.props;
        //console.log(isErr)
        //console.log(trackList)
        return (
            <div className="trackList py-1 row">
                <div className="row col-12">
                { isSearch ? <h2>{pageTitle}</h2> : ""}
                </div>
                {
                    !isErr ? 
                    trackList.map((item, index) => {
                        return (
                            <div key={index} className="col-4 albumItem">
                                <div className="albumImage">
                                    <img src={item.album.images[1].url}  />
                                </div>
                                <div className="albumText">
                                    <div className="albumInfo">
                                        <span><b>Albüm Adı:</b> {item.album.name}</span>
                                        <span><b>Albüm Yılı:</b> {item.album.release_date}</span>
                                    </div>
                                    <div className="trackInfo">
                                        <span><b>Şarkı Adı:</b> {item.name}</span>
                                        <span><b>Popülerlik:</b> {item.popularity}</span>
                                        <div className="playVideo">
                                            <span className="btnPlay" onClick= {this.playAudio(item.preview_url)}> 
                                            {this.changeIcon(item.preview_url)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="btnTrack">
                                        <a href={item.external_urls.spotify} target="_blank">Spotify'da çal</a>
                                    </div>
                                </div>
                            </div>
                    )
                    })
                    : <h2>{errText}</h2>
                }
            </div>
        )
    }
}

export default TrackList;