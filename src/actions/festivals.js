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

