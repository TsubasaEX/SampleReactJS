import { FETCH_USERS_REQUEST } from "./userTypes.JS"
import { FETCH_USERS_SUCCESS } from "./userTypes.JS"
import { FETCH_USERS_FAILURE } from "./userTypes.JS"

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}