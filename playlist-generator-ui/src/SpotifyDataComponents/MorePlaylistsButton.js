import React from 'react'
import { connect } from 'react-redux'
import InfoIcon from '@material-ui/icons/Info';
import { getUserPlaylists } from '../actions/actionCreators';

class MorePlaylistsButton extends React.Component {
    render(){
        const {
            getNextPlaylists, 
            offset
        } = this.props

        return <div className="playlist-grid-footer-buttons">
            <button onClick={() => getNextPlaylists(offset)}>Get More of My Playlists</button>
            <div className="tooltip">
                <InfoIcon/>
                <span className="tooltiptext">
                    The Spotify API only returns 20 of your public playlists at a time. 
                    To see more of your playlists click the button to the left.
                </span>
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        offset: state.playlistOffset
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNextPlaylists: (offset) => dispatch(getUserPlaylists(offset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MorePlaylistsButton)