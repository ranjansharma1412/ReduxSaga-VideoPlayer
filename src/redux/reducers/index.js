import { combineReducers } from 'redux'
import videoReducer from './videos'

const rootReducer = combineReducers({
    video:videoReducer
})

export default rootReducer;