import { combineReducers } from 'redux'

import performers from './performers'
import festivals from './festivals'
import modals from './modals'

export default combineReducers({
    performers,
    festivals,
    modals,
})