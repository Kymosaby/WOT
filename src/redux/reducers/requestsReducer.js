import * as ReqType from '../actions/actionTypes/requestsTypes'

const INITIAL_STATE = {
    // pinnedUnassignedRequests : [],
    unassignedRequests: [],
    standByRequests : [],
    requestSchema: []
};

const requestsReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ReqType.GET_UNASSIGNED_REQUESTS:
            return { 
                ...state, 
                unassignedRequests: [...action.payload]
            }
        case ReqType.GET_STANDBY_REQUESTS:
            return {
                ...state,
                standByRequests : [...action.payload]
            }
        case ReqType.GET_REQUEST_SCHEMA:
            return {
                ...state,
                requestSchema : [...action.payload]
            }
        // case ReqType.GET_UNASSIGNED_PINNED_REQUESTS:
        //     return {
        //         ...state,
        //         pinnedUnassignedRequests : action.payload
        //     }
        default: return state;
    }
}

export default requestsReducer