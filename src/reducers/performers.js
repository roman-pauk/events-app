import { combineReducers } from 'redux'
import * as prf_act from '../actions/performers'

const initialState = {
    list: {
        data: [],
        fetching: false,
        errors: false,
    }
}

const list = (state = initialState.list, action) => {
    switch (action.type) {
        case prf_act.GET_PERFORMERS_REQUEST:
            return {
                ...state,
                fetching: true,
                errors: false,
            }
        case prf_act.GET_PERFORMERS_SUCCESS:
            return {
                ...initialState.list,
                data: action.payload
            }
        case prf_act.GET_PERFORMERS_FAIL:
            return {
                ...state,
                fetching: false,
                errors: true,
            }
        default:
            return state
    }
}

export default combineReducers({
    list,
})