import * as modal_act from '../actions/modals'
import { ADD_PERFORMER_SUCCESS } from '../actions/festivals'

const initialState = {
    addPfr: {
        festival_id: '',
        festival_prf_ids: [],
        opened: false,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case modal_act.OPEN_ADD_PRF_MODAL:
            return {
                ...state,
                addPfr: {
                    festival_id: action.payload.festival_id,
                    festival_prf_ids: action.payload.festival_prf_ids,
                    opened: true,
                }
            }
        case modal_act.CLOSE_ADD_PRF_MODAL:
            return {
                ...state,
                addPfr: initialState.addPfr
            }
        case ADD_PERFORMER_SUCCESS:
            if (state.addPfr.festival_id !== action.payload.festival_id) {
                return state
            }
            return {
                ...state,
                addPfr: {
                    ...state.addPfr,
                    festival_prf_ids: action.payload.festival_data.performers.map(el => el.id)
                }
            }
        default:
            return state
    }
}