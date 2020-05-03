import { combineReducers } from 'redux'
import requestsReducer from './requestsReducer'
import userReducer from "./userReducer"
import queueReducer from "./queueReducer"

export default combineReducers({
    requestsReducer,
    userReducer,
    queueReducer
})

