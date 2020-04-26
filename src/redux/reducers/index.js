import { combineReducers } from 'redux'
import requestsReducer from './requestsReducer'
import userReducer from "./userReducer"

export default combineReducers({
    requestsReducer,
    userReducer
})

