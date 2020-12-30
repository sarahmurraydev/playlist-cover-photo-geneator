import React from 'react'
import { connect } from 'react-redux'
import AppsIcon from '@material-ui/icons/Apps';
import '../App.css';
import { openModal } from '../actions/actionCreators';

class Playlist extends React.Component {

    render(){
        const {
            showModal
        } = this.props 

        let smallImg = this.props.playlist.images[0]['url'];
        // console.log(`${this.props.index} ${this.props.playlist.name} playlist has image url defined:`, smallImg)
        console.log(this.props.playlist.id)

        return <div className="playlist-card">
            <img src={smallImg} alt="playlist profile photo returned from spotify" className="playlist-img"/>
            <div className="playlist-details">
                <p className="playlist-name">{this.props.playlist.name}</p>
                <AppsIcon onClick={() => showModal(this.props.playlist.id)}/>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        showModal: (playlistID) => dispatch(openModal(playlistID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)