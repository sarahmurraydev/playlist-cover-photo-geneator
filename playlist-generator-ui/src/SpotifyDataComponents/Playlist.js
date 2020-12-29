import React from 'react'
import AppsIcon from '@material-ui/icons/Apps';
import '../App.css';

class Playlist extends React.Component {

    render(){
        let smallImg = this.props.playlist.images[0]['url'];
        console.log(`${this.props.index} ${this.props.playlist.name} playlist has image url defined:`, smallImg)

        return <div className="playlist-card">
            <img src={smallImg} alt="playlist profile photo returned from spotify" className="playlist-img"/>
            <div className="playlist-details">
                <p className="playlist-name">{this.props.playlist.name}</p>
                <AppsIcon />
            </div>
        </div>
    }
}

export default Playlist