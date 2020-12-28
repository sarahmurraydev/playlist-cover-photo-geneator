import axios from 'axios';
import { API_URL } from '../constants'
import * as actionTypes from './actionTypes'

export const getToken = (url) => {
    console.log("the url:", url)
    let tokenString = url.split('/authorized/')[1]
    let tokenReformated = tokenString.replace(/'/g, '"');
    return {
        type: actionTypes.GET_TOKEN,
        tokenData: JSON.parse(tokenReformated)
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