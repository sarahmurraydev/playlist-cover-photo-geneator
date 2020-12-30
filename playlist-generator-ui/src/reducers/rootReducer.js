import * as types from '../actions/actionTypes';
import { initialState } from '../initialState';

const setSpotifyToken = (state, tokenData) => {
    return {
        ...state,
        ...{
            tokenData: tokenData
        }
    }
}

const toggleLoader = (state) => {
    return {
        ...state,
        ...{
            loading: !state.loading
        }
    }
}

const openModal = (state, selectedPlaylist) => {
    return {
        ...state,
        ...{
            showModal: true,
            selectedPlaylist: selectedPlaylist
        }
    }
}

const closeModal = (state) => {
    return {
        ...state,
        ...{
            showModal: false,
            // clear the selected playlist after successful response
            selectedPlaylist: {}
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


const rootReducer = (state = initialState, action) => {
    console.log("in reducer we are executing the following action:", action.type)
    switch(action.type) {
        case types.GET_TOKEN:
            return setSpotifyToken(state, action.tokenData)
        case types.TOGGLE_LOADER:
            return toggleLoader(state)
        case types.OPEN_MODAL: 
            return openModal(state, action.selectedPlaylist)
        case types.CLOSE_MODAL: 
            return closeModal(state)
        case types.SET_API_ERROR:
            return setAPIError(state, action.error)
        case types.SET_USER_DATA:
            return setUserData(state, action.data)
        case types.SET_PLAYLIST_DATA: 
            return setPlaylistData(state, action.data)
        case types.MAKE_AND_SET_PHOTO_RESPONSE:
            return setPutPhotoResponse(state, action.data)
        case types.UPDATE_PLAYLIST_DATA:
            return updatePlaylistData(state, action.data)
        default: 
            return state
    }
}

export default rootReducer;