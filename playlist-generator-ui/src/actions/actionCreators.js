import axios from 'axios';
import { API_URL } from '../constants'
import { makeAuthHeader } from '../utils';
import * as actionTypes from './actionTypes'

export const getToken = (url) => {
    let tokenString = url.split('/authorized/')[1]
    let tokenReformated = tokenString.replace(/'/g, '"');
    return {
        type: actionTypes.GET_TOKEN,
        tokenData: JSON.parse(tokenReformated)
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

export function makeAndSetPhoto(id) {
    return (dispatch, getState) => {
        console.log("getting the playlist ID:", id)
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/image/${id}`, config)
        .then(response => {
            dispatch(setAPIData(actionTypes.MAKE_AND_SET_PHOTO_RESPONSE, response.data))
        })
        .catch(err => {
            dispatch(setAPIError(err))
        })
    }
}