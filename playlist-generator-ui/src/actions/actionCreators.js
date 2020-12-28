import axios from 'axios';
import { API_URL } from '../constants'
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
        let config = {
            headers: {
                Authorization: `Bearer ${token['token']}`
            }
        } 
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


// saving for next axios requests: 
/* 
axios.get(`${API_URL}/session`)
        .then(response => {
            return {
                type: actionTypes.GET_TOKEN,
                tokenData: response
            }
        })
        .catch(err => {
            return {
                type: actionTypes.GET_TOKEN_ERROR,
                error: err
            }
        })
*/