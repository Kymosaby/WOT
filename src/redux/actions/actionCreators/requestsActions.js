import * as ReqType from "../types/requestsTypes"
import api from "../../../FakeAPI"


export const getAllRequests = () => {
    
    let requestList = api.Requests.requests 
    
    return({
        type: ReqType.GET_REQUEST_LIST,
        payload: requestList
    })
}

export const getAllQueueGroups = () => {

    let queueGroups = api.Requests.categories

    return({
        type: ReqType.GET_QUEUE_GROUP_LIST,
        payload: queueGroups
    })
    
}

export const getQueueSchema = () => {

    let queueSchema = api.Requests.schema

    return({
        type: ReqType.GET_QUEUE_SCHEMA,
        payload: queueSchema
    })

}

export const getStandByQueue = () => {

    let standByQueue = api.Requests.standBy

    return({
        type: ReqType.GET_STAND_BY_LIST,
        payload: standByQueue
    })
    
}