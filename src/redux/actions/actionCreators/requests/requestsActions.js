import * as ReqType from "../../actionTypes/requests/requestsTypes"
import api from "../../../../FakeAPI"




export const  getUnassignedRequests= () => {
    
    return({
        type: ReqType.GET_ALL_REQUESTS,
        payload: api.Requests.requests
    })

}