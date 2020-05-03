import * as ReqType from "../actionTypes/requestsTypes"
import api from "../../../FakeAPI"
import System from "../../../System"

let requestNameSpace = System.schema.request

export const  getUnassignedRequests= () => {
    
    return({
        type: ReqType.GET_UNASSIGNED_REQUESTS,
        payload: api.Requests.requests.filter( req => req.type === requestNameSpace.type.unassigned )
    })

}

export const getStandByRequests = () => {

    return({
        type: ReqType.GET_STANDBY_REQUESTS,
        payload: api.Requests.requests.filter( req => req.type === requestNameSpace.type.unassigned ).filter( req => req.state == requestNameSpace.state.standBy)
    })
    
}

export const getRequestSchema = () => {

    return({
        type: ReqType.GET_REQUEST_SCHEMA,
        payload: api.Requests.schema
    })

}

