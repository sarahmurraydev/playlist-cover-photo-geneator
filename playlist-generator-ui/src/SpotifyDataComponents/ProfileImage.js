import React from 'react'
import { connect } from 'react-redux'

class ProfileImage extends React.Component {
    render(){
        const {
            userImages
        } = this.props

        // show the profile image if the user has images and the first image src is defined
        if (userImages.length > 0) {
            let imageSrc = userImages[0]["url"]
            if (imageSrc) {
                return <div id="profile-image">
                    <img src={imageSrc} alt="Profile Picture from User's Spotify Account" className="user-profile-picture"/>
                </div>
            } else {
                DefaultProfilePicture()
            }
        } else {
            DefaultProfilePicture()
        }
    }
}

function DefaultProfilePicture() {
    return <div id="profile-image">
        <img src="#" alt="default profile - outline of person"/>
    </div>
}

const mapStateToProps = state => {
    return {
        userImages: state.userData.images
    }
}

export default connect(mapStateToProps)(ProfileImage)