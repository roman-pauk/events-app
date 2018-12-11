import { combineReducers } from 'redux'
import * as fst_act from '../actions/festivals'

const initialState = {
    list: {
        data: [],
        fetching: false,
        errors: false,
    },
    addPfr: {
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
        case fst_act.ADD_PERFORMER_SUCCESS:
            return {
                ...state,
                data: state.data.map(el => el.id === action.payload.festival_id ? action.payload.festival_data : el)
            }
        default:
            return state
    }
}

const addPfr = (state = initialState.addPfr, action) => {
    switch (action.type) {
        case fst_act.ADD_PERFORMER_REQUEST:
            return {
                ...state,
                fetching: true,
                errors: false,
            }
        case fst_act.ADD_PERFORMER_SUCCESS:
            return initialState.addPfr
        case fst_act.ADD_PERFORMER_FAIL:
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
    addPfr,
})