import React from 'react'
import { connect } from 'react-redux'
import defaultUserImg from '../images/spotify-default-user-img.png'

class ProfileImage extends React.Component {
    render(){
        const {
            userImages
        } = this.props

        // show the profile image if the user has images and the first image src is defined
        if (userImages.length > 0) {
            let imageSrc = userImages[0]["url"]
            if (imageSrc) {
                return <div className="profile-image">
                    <img src={imageSrc} alt="Profile Picture from User's Spotify Account" className="user-profile-picture"/>
                </div>
            } else {
                return DefaultProfilePicture()
            }
        } else {
            return DefaultProfilePicture()
        }
    }
}

function DefaultProfilePicture() {
    return <div className="profile-image">
        <img src={defaultUserImg} alt="default profile - outline of person" className="user-profile-picture"/>
    </div>
}

const mapStateToProps = state => {
    return {
        userImages: state.userData.images
    }
}

export default connect(mapStateToProps)(ProfileImage)