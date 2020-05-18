import * as unassignedTypes from "../../actionTypes/requests/unassignedTypes"
import api from "../../../../FakeAPI"

export const  setFocusOnRequest = (itemID) => {

    return ({
        type : unassignedTypes.SET_FOCUS_REQUEST,
        payload : itemID
    })
}

export const  removeFocusOnRequest = (itemID) => {

    return ({
        type : unassignedTypes.REMOVE_FOCUS_REQUEST,
        payload : itemID
    })
}

export const getAllFilters = () => {
    
    return ({
        type : unassignedTypes.GET_ALL_FILTERS,
        payload : api.Requests.filters
    })
}

export const setFilter = (filterCategory, value) => {
    
    return ({
        type : unassignedTypes.SET_FILTER,
        payload : [filterCategory, [value]]
    })
}

export const removeFilter = (filterCategory) => {

    return ({
        type : unassignedTypes.REMOVE_FILTER,
        payload : filterCategory
    })
}

export const clearAllFilters = () => {

    return ({
        type : unassignedTypes.SET_FILTER,
    })
}