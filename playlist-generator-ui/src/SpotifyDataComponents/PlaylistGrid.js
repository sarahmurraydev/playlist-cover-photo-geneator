import React from 'react'
import { connect } from 'react-redux'
import { getUserPlaylists } from '../actions/actionCreators'
import Playlist from './Playlist'
import MorePlaylistsButton from './MorePlaylistsButton'

class PlaylistGrid extends React.Component {
    render(){
        const {
            userPlaylistData,
            getMyPlaylists
        } = this.props

        if (userPlaylistData.items && userPlaylistData.items.length > 0) {
            const playlists = userPlaylistData.items
            console.log("playlist items:", playlists)
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
        userPlaylistData: state.userPlaylistData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMyPlaylists: () => dispatch(getUserPlaylists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistGrid)