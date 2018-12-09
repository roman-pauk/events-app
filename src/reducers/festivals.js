import { combineReducers } from 'redux'
import * as fst_act from '../actions/festivals'

const initialState = {
    list: {
        data: [],
        fetching: false,
        errors: false,
    }
}

const list = (state = initialState.list, action) => {
    switch (action.type) {
        case fst_act.GET_FESTIVALS_REQUEST:
            return {
                ...state,
                fetching: true,
                errors: false,
            }
        case fst_act.GET_FESTIVALS_SUCCESS:
            return {
                ...initialState.list,
                data: action.payload
            }
        case fst_act.GET_FESTIVALS_FAIL:
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