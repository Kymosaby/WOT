import * as QueueType from "../actionTypes/queueTypes"
import api from "../../../FakeAPI"

export const getQueueGroups = () => {
    

    return({
        type: QueueType.GET_QUEUE_GROUPS,
        payload : api.Requests.groups
    })
}

export const setActiveQueueGroup = (group) => {
    return({
        type: QueueType.SET_ACTIVE_GROUP_CATEGORY,
        payload : group
    })
}


export const getQueueFilters = () => {
    return({
        type: QueueType.GET_QUEUE_FILTERS,
        payload : api.Requests.filters
    })

}

export const setActiveQueueFilters = ([filters]) => {
    return({
        type: QueueType.SET_ACTIVE_FILTER,
        payload : [...filters]
    })
}

export const focusItem = (itemID) => {
    return ({
        tupe: QueueType.SET_FOCUSED_ITEM,
        payload : itemID
    })
}