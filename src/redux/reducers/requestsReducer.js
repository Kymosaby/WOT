import * as ReqType from '../actions/actionTypes/requestsTypes'

const INITIAL_STATE = {
    requests: [],
    queueGroups: [],
    queueSchema: [],
    standByQueue: []
};

const requestsReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case ReqType.GET_REQUEST_LIST:
            return { 
                ...state, 
                requests: action.payload.requestList
            }
        case ReqType.GET_QUEUE_GROUP_LIST:
            return {
                ...state,
                queueGroups : action.payload.queueGroups
            }
        case ReqType.GET_QUEUE_SCHEMA:
            return {
                ...state,
                queueSchema : action.payload.queueSchema
            }
        case ReqType.GET_STAND_BY_LIST:
            return {
                ...state,
                standByQueue : action.payload.standByQueue
            }
            
            default: return state;
            
    }
}

export default requestsReducer