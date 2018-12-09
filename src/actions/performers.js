import axios from '../Api/axios'
import Api from '../Api'

export const GET_PERFORMERS_REQUEST = 'GET_PERFORMERS_REQUEST'
export const GET_PERFORMERS_SUCCESS = 'GET_PERFORMERS_SUCCESS'
export const GET_PERFORMERS_FAIL = 'GET_PERFORMERS_FAIL'

export const getPerformers = () => {
    return async dispatch => {
        dispatch({
            type: GET_PERFORMERS_REQUEST
        })
        try {
            const performers = await axios.get(Api.performers)
            dispatch({
                type: GET_PERFORMERS_SUCCESS,
                payload: performers.data.performers
            })
        } catch (error) {
            dispatch({
                type: GET_PERFORMERS_FAIL
            })
        }
    }
}

