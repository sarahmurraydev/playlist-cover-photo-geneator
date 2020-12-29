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

export function getUserPlaylists() {
    return (dispatch, getState) => {
        console.log("getting the user playlists ...")
        let token = getState().tokenData
        let config = makeAuthHeader(token)
        axios.get(`${API_URL}/playlists?limit=20&offset=0`, config)
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