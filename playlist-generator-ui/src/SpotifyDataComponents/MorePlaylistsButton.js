import React from 'react'
import { connect } from 'react-redux'
import { getUserPlaylists } from '../actions/actionCreators';

class MorePlaylistsButton extends React.Component {
    render(){
        const {
            getNextPlaylists, 
            offset
        } = this.props

        return <div className="playlist-grid-footer-buttons">
            <button onClick={() => getNextPlaylists(offset)}>Get More of My Playlists</button>
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