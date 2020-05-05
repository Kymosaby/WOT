import * as QueueType from '../actions/actionTypes/queueTypes'

const INITIAL_STATE = {
    groups : new Map(),
    filters: [],
    activeGroupCategory : "date",
    activeFilters : [],
    pinnedItems : []
};

const queueReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case QueueType.GET_QUEUE_GROUPS:
            let myGroups = new Map()
            for (let groupCategory in action.payload){
                myGroups.set(groupCategory, action.payload[groupCategory])
            }
            return { 
                ...state, 
                groups : myGroups
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
        case QueueType.REMOVE_FILTER:
            return {
                ...state,

            }
        case QueueType.SET_PINNED_ITEM:
            return {
                ...state,

            }
        case QueueType.SET_FOCUSED_ITEM:
            return {
                ...state,
            }
        default: return state;
    }
}

export default queueReducer