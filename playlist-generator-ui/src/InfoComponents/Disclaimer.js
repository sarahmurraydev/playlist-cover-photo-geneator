import { Link } from 'react-router-dom'

const Disclaimer = () => {
    return <div className="main-body">
            <p className="disclaimer-text">
                No user data is stored or maintained within this app. 
                Data is pulled soley from the&nbsp;<a
                    className="app-link inline-link"
                    href="https://developer.spotify.com/documentation/web-api/"
                    target="_blank"
                    rel="noopener noreferrer"
                >Spotify Web API</a>&nbsp;who is responsible for maintaining and updating the data. 
                In addition all images are created using album cover photos. 
                These photos are property of those artists and record labels with all rights beloning to those stakeholders. 
                You can remove this application from authorizing your spotify data, at any time by going&nbsp;<a
                    className="app-link inline-link"
                    href="https://www.spotify.com/us/account/apps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >here</a>&nbsp;and clicking "REMOVE ACCESS" for the app "Cover Photo Matrix Maker"
            </p>
            <Link to="/" className="green-button-link app-link">
                Go Home
            </Link>
        </div>
}

export default Disclaimer