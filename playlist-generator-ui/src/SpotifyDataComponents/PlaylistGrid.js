import React from 'react'
import { connect } from 'react-redux'
import { getUserPlaylists } from '../actions/actionCreators'

class Playlist extends React.Component {
    render(){
        const {
            userPlaylistData,
            getMyPlaylists
        } = this.props

        if (userPlaylistData.items && userPlaylistData.items.length > 0) {
            return <div>
                <p> We've got your playlists. Let's show you a nice grid of them:</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)