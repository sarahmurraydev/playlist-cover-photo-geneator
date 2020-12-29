import React from 'react'
import { connect } from 'react-redux'
import { getUserPlaylists } from '../actions/actionCreators'
import Playlist from './Playlist'
import MorePlaylistsButton from './MorePlaylistsButton'

class PlaylistGrid extends React.Component {
    render(){
        const {
            userPlaylistData,
            playlists,
            getMyPlaylists
        } = this.props

        if (userPlaylistData.items && playlists.length > 0) {

            return <div className="playlist-grid">
                {playlists.map((playlist, index) => {
                   return <Playlist key={index} playlist={playlist}/>
                })}
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