import * as types from '../actions/actionTypes';
import { initialState } from '../initialState';

const setSpotifyToken = (state, tokenData) => {
    console.log("updating the tokenData state", tokenData)
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

const toggleModal = (state) => {
    return {
        ...state,
        ...{
            showModal: !state.showModal
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
            playlists: state.playlists.concat(data.items),
            // increment the offset each time the API call is made
            playlistOffset: state.playlistOffset + 20
        }
    }
}

const setAPIError = (state, error) => {
    console.log("in reducer, setting api error", error)
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
        case types.TOGGLE_MODAL: 
            return toggleModal(state)
        case types.SET_API_ERROR:
            return setAPIError(state, action.error)
        case types.SET_USER_DATA:
            return setUserData(state, action.data)
        case types.SET_PLAYLIST_DATA: 
            return setPlaylistData(state, action.data)
        default: 
            return state
    }
}

export default rootReducer;