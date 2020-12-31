import axios from 'axios';
import { API_URL, SUCCESS } from '../constants'
import { makeAuthHeader } from '../utils';
import * as actionTypes from './actionTypes'

export function getToken(url) {
    return (dispatch, getState) => {
        dispatch(toggleLoader())
        let tokenString = url.split('/authorized/')[1]
        let tokenReformated = tokenString.replace(/'/g, '"');
        dispatch(setToken(tokenReformated))
        dispatch(getUserData())
    }
}

export const setToken = (token) => {
    return {
        type: actionTypes.SET_TOKEN_DATA,
        tokenData: JSON.parse(token)
    }
}

export const toggleLoader = () => {
    return {
        type: actionTypes.TOGGLE_LOADER
    }
}

export const openModal = (playlist) => {
    return {
        type: actionTypes.OPEN_MODAL,
        selectedPlaylist: playlist
    }
}

export const closeModal = () => {
    return {
        type: actionTypes.CLOSE_MODAL
    }
}

export const setAPIError = (error) => {
    return {
        type: actionTypes.SET_API_ERROR,
        error
    }
}

export const setAPIData = (type, data) => {
    return {
        type, 
        data
    }
}

export function getUserData() {
    return (dispatch, getState) => {
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/me`, config)
        .then(response => {
            dispatch(setAPIData(actionTypes.SET_USER_DATA, response.data))
            dispatch(toggleLoader())
        })
        .catch(err => {
            dispatch(setAPIError(err))
        })
    }

}

export function getUserPlaylists(offset=0) {
    // when we already have the user's first 20 playlists, 
    // we use the `next` url of the playlist object to get the offset (in MorePlaylistButton.js)
    return (dispatch, getState) => {
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/playlists?limit=20&offset=${offset}`, config)
        .then(response => {
            dispatch(setAPIData(actionTypes.SET_PLAYLIST_DATA, response.data))
        })
        .catch(err => {
            dispatch(setAPIError(err))
        })
    }
}

export function getUpdatedPlaylistData(id) {
    // when a playlist has been updated, get the new data (i.e. new image)
    return (dispatch, getState) => {
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/playlist/${id}`, config)
        .then(response => {
            dispatch(closeModal())
            dispatch(setAPIData(actionTypes.UPDATE_PLAYLIST_DATA, response.data))
        })
        .catch(err => {
            dispatch(setAPIError(err))
        })
    }
}

export function makeAndSetPhoto(id) {
    return (dispatch, getState) => {
        // dispatch loader (modal you can't dismiss)
        console.log("getting the playlist ID:", id)
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/image/${id}`, config)
        .then(response => {
            console.log("got a response from PUT", response.data)
            if(response.data.status == SUCCESS) {
                // show success modal and make the get call 
                dispatch(setAPIData(actionTypes.MAKE_AND_SET_PHOTO_RESPONSE, response.data))
                dispatch(getUpdatedPlaylistData(id))
            } else {
                 // show error modal
                dispatch(setAPIError(response.data))
            }
        })
        .catch(err => {
            dispatch(setAPIError(err))
        })
    }
}