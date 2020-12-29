import React from 'react'
import { connect } from 'react-redux'
import { getUserPlaylists } from '../actions/actionCreators'
import Playlist from './Playlist'
import MorePlaylistsButton from './MorePlaylistsButton'

class PlaylistGrid extends React.Component {
    render(){
        const {
            userID,
            userPlaylistData,
            playlists,
            getMyPlaylists
        } = this.props

        if (userPlaylistData.items && playlists.length > 0) {

            return <div className="grid-wrapper">
                <div className="playlist-grid">
                    {playlists.map((playlist, index) => {
                        // only show the playlist if the user owns it and the playlist has items on it
                        if(playlist.owner.id === userID && playlist.tracks.total > 0) {
                            return <Playlist key={index} playlist={playlist} index={index}/>
                        } 
                    })}
                </div>
                <MorePlaylistsButton />
                </div>
        } else {
            return <button onClick={getMyPlaylists}> 
                Fetch my Playlists
            </button>
        }
    }
}

const mapStateToProps = state => {
    return {
        userID: state.userData.id ? state.userData.id : 0,
        userPlaylistData: state.userPlaylistData,
        playlists: state.playlists
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMyPlaylists: () => dispatch(getUserPlaylists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistGrid)