import React from 'react'
import { connect } from 'react-redux'
import Spinner from 'react-bootstrap/Spinner'
import { getUserPlaylists } from '../actions/actionCreators';

class MorePlaylistsButton extends React.Component {
    render(){
        const {
            isLoadingPlaylistData,
            getNextPlaylists, 
            offset
        } = this.props

        return <div className="playlist-grid-footer-buttons">
            {isLoadingPlaylistData ? 
                    <Spinner animation="border" role="status" variant="success"/> : 
                    <button onClick={() => getNextPlaylists(offset)}>
                        Get More of My Playlists
                    </button>
                }
            
        </div>
    }
}

const mapStateToProps = state => {
    return {
        isLoadingPlaylistData: state.showPlaylistInlineLoader,
        offset: state.playlistOffset
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getNextPlaylists: (offset) => dispatch(getUserPlaylists(offset))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MorePlaylistsButton)