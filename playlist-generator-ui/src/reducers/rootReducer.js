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

const setUserData = (state, data) => {
    return {
        ...state, 
        ...{
            userData: data
        }
    }
}


const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_TOKEN:
            return setSpotifyToken(state, action.tokenData)
        case types.TOGGLE_LOADER:
            return toggleLoader(state)
        case types.GET_USER_DATA:
            return setUserData(state, action.data)
        default: 
            return state
    }
}

export default rootReducer;