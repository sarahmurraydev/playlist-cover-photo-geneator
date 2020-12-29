import React from 'react'
import { connect } from 'react-redux'
import AppsIcon from '@material-ui/icons/Apps';
import AreYouSureModal from '../InfoComponents/AreYouSureModal'
import '../App.css';
import { toggleModal } from '../actions/actionCreators';

class Playlist extends React.Component {

    render(){
        const {
            showModal
        } = this.props 

        let smallImg = this.props.playlist.images[0]['url'];
        // console.log(`${this.props.index} ${this.props.playlist.name} playlist has image url defined:`, smallImg)

        return <div className="playlist-card">
            <img src={smallImg} alt="playlist profile photo returned from spotify" className="playlist-img"/>
            <div className="playlist-details">
                <p className="playlist-name">{this.props.playlist.name}</p>
                <AppsIcon onClick={showModal}/>
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
        showModal: () => dispatch(toggleModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)