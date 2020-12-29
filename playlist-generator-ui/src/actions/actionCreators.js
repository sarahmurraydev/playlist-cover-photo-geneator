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

export const toggleModal = () => {
    return {
        type: actionTypes.TOGGLE_MODAL
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
        console.log("getting user data .....")
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/me`, config)
        .then(response => {
            console.log("got a response from the API!", response)
            dispatch(setAPIData(actionTypes.SET_USER_DATA, response.data))
        })
        .catch(err => {
            console.log("got an error from the API :(")
            dispatch(setAPIError(err))
        })
    }

}

export function getUserPlaylists(offset=0) {
    // when we already have the user's first 20 playlists, 
    // we use the `next` url of the playlist object to get the offset (in MorePlaylistButton.js)
    return (dispatch, getState) => {
        console.log("getting the user playlists ...")
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/playlists?limit=20&offset=${offset}`, config)
        .then(response => {
            console.log("got a response from the API from playlists!", response)
            dispatch(setAPIData(actionTypes.SET_PLAYLIST_DATA, response.data))
        })
        .catch(err => {
            console.log("got an error from the API in get playlists")
            dispatch(setAPIError(err))
        })
    }
}

export function makeAndSetPhoto(id=null) {
    return (dispatch, getState) => {
        console.log("setting the image of playlist", id)
        // let token = getState().tokenData
        // let config = makeAuthHeader(token)
        // axios.get(`${API_URL}/playlists?limit=20&offset=${offset}`, config)
        // .then(response => {
        //     dispatch(setAPIData(actionTypes.MAKE_AND_SET_PHOTO, response.data))
        // })
        // .catch(err => {
        //     dispatch(setAPIError(err))
        // })
    }
}