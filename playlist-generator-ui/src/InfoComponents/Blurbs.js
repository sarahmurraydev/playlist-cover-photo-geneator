export const AboutBlurb = props => (
    <div className="blurb about-blurb">
        <p>To get started, fetch your public spotify playlists. This will pull the first 
            20-ish non-empty public playlists you own. If the playlist you want to update 
            is not included, you can continue to get the next 20 and so on, or 
            you can move the playlist up via the spotify desktop app and load this app again.
        </p>
    </div>
)

export const GotPlaylistsBlurb = props => (
    <div className="blurb playlists-blurb">
         <p>
            Look's like you've got some awesome playlists here! 
            Go ahead and click on the mosaic button on each playlist card 
            to make your playlist's new profile photo. 
        </p>
    </div>
)

export const NoPlaylistsBlurb = props => (
    <div className="blurb no-playlists-blurb">
        <p>
            Look's like you don't have any non-empty public playlists that you own. 
            To use this app, make a playlist on spotify, make sure the playlist is public, 
            and has at least one song (but the more songs the better)!
        </p>
    </div>
)
 
