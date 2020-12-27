import * as types from '../actions/actionTypes';
import { initialState } from '../initialState';

const getSpotifyToken = (state, token) => {
    return {
        ...state,
        ...{
            authToken: token
        }
    }
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_SPOTIFY_TOKEN:
            return getSpotifyToken(state, action.token)
        default: 
            return state
    }
}

export default rootReducer;