import * as QueueType from "../../actionTypes/requests/unassignedTypes"
import api from "../../../../FakeAPI"

export const  setActiveRequest = (itemID) => {

    return ({
        type : QueueType.SET_ACTIVE_REQUEST,
        payload : itemID
    })
}

export const  removeActiveRequest = () => {

    return ({
        type : QueueType.SET_ACTIVE_REQUEST,
    })
}

export const getAllFilters = () => {
    
    return ({
        type : QueueType.GET_ALL_FILTERS,
        payload : api.Requests.filters
    })
}

export const setFilter = (filterCategory, value) => {
    
    return ({
        type : QueueType.SET_FILTER,
        payload : [filterCategory, [value]]
    })
}

export const removeFilter = (filterCategory) => {

    return ({
        type : QueueType.REMOVE_FILTER,
        payload : filterCategory
    })
}

export const clearAllFilters = () => {

    return ({
        type : QueueType.SET_FILTER,
    })
}