import React from 'react'
import InfoIcon from '@material-ui/icons/Info';

class MorePlaylistsButton extends React.Component {
    render(){
        return <div className="playlist-grid-footer-buttons">
            <button>Get More of My Playlists</button>
            <div className="tooltip">
                <InfoIcon/>
                <span className="tooltiptext">
                    The Spotify API only returns 20 of your public playlists at a time. 
                    To see more of your playlists click the button to the left.
                </span>
            </div>
        </div>
    }
}

export default MorePlaylistsButton