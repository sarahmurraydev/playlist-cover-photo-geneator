import React from 'react'
import { API_URL } from '../constants'

class Auth extends React.Component {
    render(){
        return <div className="auth-div">
            <a
          className="auth-link"
          href={API_URL}
          rel="noopener noreferrer"
        >
          Authorize Your Spotify
        </a>
        </div>
    }
}

export default Auth