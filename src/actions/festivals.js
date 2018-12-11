import axios from '../Api/axios'
import Api from '../Api'

export const GET_FESTIVALS_REQUEST = 'GET_FESTIVALS_REQUEST'
export const GET_FESTIVALS_SUCCESS = 'GET_FESTIVALS_SUCCESS'
export const GET_FESTIVALS_FAIL = 'GET_FESTIVALS_FAIL'

export const getFestivals = () => {
    return async dispatch => {
        dispatch({
            type: GET_FESTIVALS_REQUEST
        })
        try {
            const festivals = await axios.get(Api.festivals)
            dispatch({
                type: GET_FESTIVALS_SUCCESS,
                payload: festivals.data.festivals
            })
        } catch (error) {
            dispatch({
                type: GET_FESTIVALS_FAIL
            })
        }
    }
}

export const ADD_PERFORMER_REQUEST = 'ADD_PERFORMER_REQUEST'
export const ADD_PERFORMER_SUCCESS = 'ADD_PERFORMER_SUCCESS'
export const ADD_PERFORMER_FAIL = 'ADD_PERFORMER_FAIL'

export const addPerformer = (festival_id, performer_id) => {
    return async dispatch => {
        dispatch({
            type: ADD_PERFORMER_REQUEST
        })
        try {
            const data = await axios.put(Api.festival(festival_id), {
                user_id: performer_id
            })
            dispatch({
                type: ADD_PERFORMER_SUCCESS,
                payload: {
                    festival_id,
                    festival_data: data.data
                }
            })
        } catch (error) {
            dispatch({
                type: ADD_PERFORMER_FAIL
            })
        }
    }
}

