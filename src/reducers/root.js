import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import performers from './performers'
import festivals from './festivals'

export default combineReducers({
    performers,
    festivals,
    form: formReducer,
})