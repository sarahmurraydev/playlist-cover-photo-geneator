import React from 'react'
import { connect } from "react-redux"

class User extends React.Component {
    render(){
        const {
            userData
        } = this.props

        return <div>
            <h1>WELCOME: {userData.display_name}</h1>
            <p>Here we will show you your playlists to let you make a mosaic of one of them</p>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.userData
    }
}

export default connect(mapStateToProps)(User)