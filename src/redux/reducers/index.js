import { combineReducers } from 'redux'
import requestsReducer from './requests/requestsReducer'
import queueReducer from "./requests/queueReducer"
import unassignedReducer from "./requests/unassignedReducer"
import userReducer from "./userReducer"
export default combineReducers({
    requestsReducer,
    userReducer,
    queueReducer,
    unassignedReducer
})

