import * as ReqType from '../actions/actionTypes/requestsTypes'

const INITIAL_STATE = {
    requests: [],
};

const requestsReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ReqType.GET_ALL_REQUESTS:
            return { 
                ...state, 
                requests: [...action.payload]
            }
        
        default: return state;
    }
}

export default requestsReducer