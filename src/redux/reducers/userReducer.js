import * as userType from '../actions/actionTypes/userTypes'

const INITIAL_STATE = {
    nickName : ""
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case userType.GET_USER_NAME:            
            return {
                ...state,
                nickName : action.payload
            }
        default: return state
    }
    
}

export default userReducer