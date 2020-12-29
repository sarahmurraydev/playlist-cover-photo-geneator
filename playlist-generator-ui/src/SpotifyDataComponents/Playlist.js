import React from 'react'
import '../App.css';

class Playlist extends React.Component {

    render(){
        let smallImg = this.props.playlist.images[0]['url'];
        console.log(this.props)

        return <div className="playlist">
            <img src={smallImg} alt="playlist profile photo returned from spotify" className="playlist-img"/>
            <p className="playlist-name">{this.props.playlist.name}</p>
        </div>
    }
}

export default Playlist