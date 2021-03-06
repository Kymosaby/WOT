import * as unassignedTypes from '../../actions/actionTypes/requests/unassignedTypes'

const INITIAL_STATE = {
    focusedRequest : false,
    activeFilters : new Map(), //schema : filterCategory <string> : filteredValues <stringArray>  
    filters : [] 
}

const unassignedReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case unassignedTypes.SET_FOCUS_REQUEST:            
        
            return {
                ...state,
                activeRequest : action.payload
            }

        case unassignedTypes.REMOVE_FOCUS_REQUEST:

            return{
                ...state,
                focusedRequest : false
            }


        case unassignedTypes.GET_ALL_FILTERS:            
        
            return {
                ...state,
                filters : [...action.payload]
            }
            
        case unassignedTypes.SET_FILTER:            
            
        
        return {
                ...state,
                activeFilters : state.activeFilters.set(
                    action.payload[0], 
                    [...state.activeFilters.get(action.payload[0]),...action.payload[1]]
                )
            }
        case unassignedTypes.REMOVE_FILTER:

            return {
                ...state,
                activeFilters : state.activeFilters.delete(action.payload)
            }
        
        case unassignedTypes.CLEAR_ALL_FILTERS:

            return {
                ...state,
                activeFilters : state.activeFilters.clear()
            }
        
        
        default: return state
    }
}

export default unassignedReducer