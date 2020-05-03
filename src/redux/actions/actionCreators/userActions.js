import * as UserTypes from "../actionTypes/userTypes"
import api from "../../../FakeAPI"

export const getUser = () => {
    return({
        type : UserTypes.GET_USER_NAME,
        payload : api.User.nickName
    })
}