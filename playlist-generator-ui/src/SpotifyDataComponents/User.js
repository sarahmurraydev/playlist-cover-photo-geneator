import React from 'react'
import { connect } from "react-redux"
import PlaylistGrid from './PlaylistGrid'
import ProfileImage from './ProfileImage'

class User extends React.Component {
    render(){
        const {
            userData,
            numPlaylists
        } = this.props

        return <div className="spotify-data">
            <div className="user">
                <ProfileImage />
                <div className="user-stats">
                    <h1>{userData.display_name}</h1>
                    <h3>Followers: {userData.followers.total}</h3>
                    <h3>Playlists: {numPlaylists}</h3>
                </div>
            </div>
            <PlaylistGrid />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData, 
        numPlaylists: state.userPlaylistData.total
    }
}

export default connect(mapStateToProps)(User)