import React from 'react'
import { connect } from "react-redux"
import PlaylistGrid from './PlaylistGrid'
import ProfileImage from './ProfileImage'
import AboutBlurb from '../InfoComponents/AboutBlurb'
import NoPlaylistsBlurb from '../InfoComponents/NoPlaylistsBlurb'

class User extends React.Component {
    render(){
        const {
            userData,
            userPlaylistData
        } = this.props

        let numPlaylists = userPlaylistData.total ? userPlaylistData.total : 0

        console.log("total playlists:", userPlaylistData.total )

        return <div className="spotify-data">
            <div className="user">
                <ProfileImage />
                <div className="user-stats">
                    <h1>{userData.display_name}</h1>
                    <h3>Followers: {userData.followers.total}</h3>
                    <h3>Playlists: {numPlaylists}</h3>
                    {userPlaylistData && numPlaylists > 0 ? <AboutBlurb/> : <NoPlaylistsBlurb/>}
                </div>
            </div>
            <PlaylistGrid />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData, 
        userPlaylistData: state.userPlaylistData
    }
}

export default connect(mapStateToProps)(User)