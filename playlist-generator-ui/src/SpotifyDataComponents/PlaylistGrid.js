import React from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getUserPlaylists } from '../actions/actionCreators'
import Playlist from './Playlist'
import MorePlaylistsButton from './MorePlaylistsButton'


class PlaylistGrid extends React.Component {
    render(){
        const {
            userPlaylistData,
            playlists,
            getMyPlaylists,
            isLoadingPlaylistData
        } = this.props

        if (userPlaylistData.items && playlists.length > 0) {
            return <div className="grid-wrapper">
                <div className="playlist-grid">
                    {playlists.map((playlist, index) => <Playlist key={index} playlist={playlist} index={index}/>)}
                </div>
                <MorePlaylistsButton />
                </div>
        } else {
            return <div>
                {isLoadingPlaylistData ? 
                    <Spinner animation="border" role="status" variant="success"/> : 
                    <button onClick={getMyPlaylists}> 
                        Fetch my Playlists
                    </button>
                }
            </div>
        }
    }
}

const mapStateToProps = state => {
    return {
        userPlaylistData: state.userPlaylistData,
        playlists: state.playlists,
        isLoadingPlaylistData: state.showPlaylistInlineLoader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMyPlaylists: () => dispatch(getUserPlaylists())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistGrid)