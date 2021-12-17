import {
    ADD_USER_REQUEST,

} from '../types/userTypes'

export const useraddAction = (data) => {
    return {
        type: ADD_USER_REQUEST,
        payload: data,
    }
}


export const useradd = (data) => async (dispatch) => {
    dispatch(useraddAction(data))
}

