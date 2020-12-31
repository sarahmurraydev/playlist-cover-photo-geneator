import * as types from '../actions/actionTypes';
import { initialState } from '../initialState';

// UI ACTIONS:

const toggleLoader = (state) => {
    return {
        ...state,
        ...{
            mainInlineLoader: !state.mainInlineLoader
        }
    }
}

const openModal = (state, selectedPlaylist) => {
    return {
        ...state,
        ...{
            showPlaylistModal: true,
            selectedPlaylist: selectedPlaylist
        }
    }
}

const closeModal = (state) => {
    return {
        ...state,
        ...{
            showPlaylistModal: false,
            // clear the selected playlist after successful response
            selectedPlaylist: {}
        }
    }
}

// API ACTIONS: 
const setSpotifyToken = (state, tokenData) => {
    return {
        ...state,
        ...{
            tokenData: tokenData
        }
    }
}

const setUserData = (state, data) => {
    return {
        ...state, 
        ...{
            userData: data
        }
    }
}

const setPlaylistData = (state, data) => {
    return {
        ...state, 
        ...{
            userPlaylistData: data,
            // combine these playlists with the current array
            // FYI: arr.concat method creates new array so we aren't mutating state here
            playlists: state.playlists.concat(data.items),
            // increment the offset each time the API call is made
            playlistOffset: state.playlistOffset + 20
        }
    }
}

const updatePlaylistData = (state, newPlaylistData) => {
    return {
        ...state,
        ...{
            playlists: state.playlists.map(playlist => {
                return ( playlist.id == newPlaylistData.id ) ? newPlaylistData : playlist
            }),
        }
    }
}

const setPutPhotoResponse = (state, data) => {
    return {
        ...state, 
        ...{
            putPhotoResponseData: data,
        }
    }
}

const setAPIError = (state, error) => {
    return {
        ...state,
        ...{
            error
        }
    }
}

const showInlineError = (state) => {
    return {
        ...state, 
        ...{
            showInlineError: true
        }
    }
}


const rootReducer = (state = initialState, action) => {
    console.log("in reducer we are executing the following action:", action.type)
    switch(action.type) {
        // UI ACTIONS:
        case types.TOGGLE_LOADER:
            return toggleLoader(state)
        case types.OPEN_MODAL: 
            return openModal(state, action.selectedPlaylist)
        case types.CLOSE_MODAL: 
            return closeModal(state)
        // API ACTIONS:
        case types.SET_TOKEN_DATA:
            return setSpotifyToken(state, action.tokenData)
        case types.SET_USER_DATA:
            return setUserData(state, action.data)
        case types.SET_PLAYLIST_DATA: 
            return setPlaylistData(state, action.data)
        case types.MAKE_AND_SET_PHOTO_RESPONSE:
            return setPutPhotoResponse(state, action.data)
        case types.UPDATE_PLAYLIST_DATA:
            return updatePlaylistData(state, action.data)
        // ERROR ACTIONS:
        case types.ERROR_FROM_GET_USER_DATA: 
         return showInlineError(state)
        case types.SET_API_ERROR:
         return setAPIError(state, action.error)
        default: 
            return state
    }
}

export default rootReducer;