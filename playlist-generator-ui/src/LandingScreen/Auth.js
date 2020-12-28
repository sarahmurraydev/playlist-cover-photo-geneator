import React from 'react'

class Auth extends React.Component {
    render(){
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

export default Auth