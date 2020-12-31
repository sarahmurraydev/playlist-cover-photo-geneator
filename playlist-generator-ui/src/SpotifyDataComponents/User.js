import React from 'react'
import { connect } from "react-redux"
import PlaylistGrid from './PlaylistGrid'
import ProfileImage from './ProfileImage'
import { AboutBlurb, NoPlaylistsBlurb, GotPlaylistsBlurb } from '../InfoComponents/Blurbs'
import { isEmpty } from '../utils'

class User extends React.Component {
    renderBlurbAfterGetPlaylists = (n) => {
        // show a little blurb about what to do after we've fetched the user's playlists
        return n > 0 ? <GotPlaylistsBlurb/> : <NoPlaylistsBlurb/> 
    }

    renderUserStats = () => {
        
    }

    render(){
        const {
            userData,
            userPlaylistData,
            playlists
        } = this.props

        let numPlaylists = userPlaylistData.total ? userPlaylistData.total : 0

        return <div className="spotify-data">
            <div className="user">
                <ProfileImage />
                <div className="user-stats">
                    <h1>{userData.display_name}</h1>
                    <h4>Followers: {userData.followers.total}</h4>
                    {!isEmpty(userPlaylistData) ? <h4>Public Playlists: {numPlaylists}</h4> : "" }
                    {!isEmpty(userPlaylistData) ? <h4>Currently Showing: {playlists.length}</h4> : "" }
                    {!isEmpty(userPlaylistData) ? 
                        this.renderBlurbAfterGetPlaylists(playlists.length) : <AboutBlurb/>
                    }
                </div>
            </div>
            <PlaylistGrid />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData, 
        userPlaylistData: state.userPlaylistData,
        playlists: state.playlists
    }
}

export default connect(mapStateToProps)(User)