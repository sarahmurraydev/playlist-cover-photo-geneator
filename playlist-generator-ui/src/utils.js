export function makeAuthHeader(token){
    return {
        headers: {
            Authorization: `Bearer ${token['token']}`
        }
    } 
}

export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

export function filterPlaylists(playlists, userID){
    // filter the playlists the spotify api returns. 
    // the API returns all public playlists the user is following 
    //  we only want to show playlists the user owns that have songs on it
    return playlists.filter(p => p.owner.id === userID && p.tracks.total > 0)
}