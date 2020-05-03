import * as QueueType from '../actions/actionTypes/queueTypes'

const INITIAL_STATE = {
    groups : {},
    filters: [],
    activeGroupCategory : "date",
    activeFilters : []
};

const queueReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case QueueType.GET_QUEUE_GROUPS:
            return { 
                ...state, 
                groups : {...action.payload}
            }
        case QueueType.SET_ACTIVE_GROUP_CATEGORY:
            return {
                ...state,
                activeFilters : [...action.payload]
            }
        case QueueType.GET_QUEUE_FILTERS:
            return { 
                ...state, 
                filters : [...action.payload]
            }
        case QueueType.SET_ACTIVE_FILTER:
            return {
                ...state,
                activeFilters : action.payload
            }
        default: return state;
    }
}

export default queueReducer