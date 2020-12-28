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

export function getUserData() {
    return (dispatch, getState) => {
        console.log("getting user data .....")
        let token = getState().tokenData
        let config = {
            headers: token['Authorization']
        } 

        return {
            type: actionTypes.GET_USER_DATA, 
            data: {}
        }
        // axios.get(`${API_URL}/me`, config)
        // .then(response => {
        //     return {
        //         type: actionTypes.GET_TOKEN,
        //         tokenData: response
        //     }
        // })
        // .catch(err => {
        //     return {
        //         type: actionTypes.GET_TOKEN_ERROR,
        //         error: err
        //     }
        // })
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