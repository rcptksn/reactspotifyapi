import React, { Component } from 'react'

class Artist extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const {artist, isErr} = this.props;
        return (
            <div className="col-6 py-4 m-auto">
                {
                    !isErr ?
                    artist.map((item, index) => {
                        return (
                            <div key={index} className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary"></strong>
                                <h3 className="mb-1">{item.name}</h3>
                                <div className="mb-1 text-muted">Toplam Takipçi: {item.followers.total} </div>
                                <p className="card-text mb-auto">Tarzı: {item.genres.join(", ")} </p>
                                <p className="card-text mb-auto">Popülerlik: {item.popularity} </p>
                                </div>
                                <div className="col-auto d-none d-lg-block">
                                <img className="bd-placeholder-img" width="200" height="200" src={item.images[1].url}  />
                                </div>
                            </div>
                        )
                    })
                    :
                    ""
                }
            </div>
        )
    }
}

export default Artist;