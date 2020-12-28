import React from 'react'
import { connect } from 'react-redux'
import { getToken } from '../actions/actionCreators'

class Auth extends React.Component {
    render(){
        const {
            getSpotifyToken
        } = this.props;

        return <div id="auth-div">
            <a
          className="App-link"
          href="http://localhost:5000/"
          rel="noopener noreferrer"
        >
          Authorize Your Spotify to Get Started
        </a>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: () => dispatch(getToken)
    }
}

export default Auth