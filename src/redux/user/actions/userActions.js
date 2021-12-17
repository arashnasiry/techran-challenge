import {
    ADD_USER_REQUEST,
    DELETE_USER_REQUEST,
    EDIT_USER_REQUEST,
    SEARCH_USER_REQUEST,
    CLEAR_FILTER_RESULT,
    FILTER_USER_REQUEST,
} from '../types/userTypes'

export const useraddAction = (data) => {
    return {
        type: ADD_USER_REQUEST,
        payload: data,
    }
}
export const searchUserAction = (data) => {
    return {
        type: SEARCH_USER_REQUEST,
        payload: { data },
    }
}
export const wrokTypeFilterAction = (data) => {
    return {
        type: FILTER_USER_REQUEST,
        payload: { data },
    }
}
export const clearFilterResult = () => {
    return {
        type: CLEAR_FILTER_RESULT,
    }
}
export const deleteUserAction = (data) => {
    return {
        type: DELETE_USER_REQUEST,
        payload: { data },
    }
}
export const userEditAction = (data) => {
    return {
        type: EDIT_USER_REQUEST,
        payload: { data }
    }
}

export const useradd = (data) => async (dispatch) => {
    dispatch(useraddAction(data))
}
export const deleteUser = (userId) => async (dispatch, getstate) => {
    const usersList = getstate().user.userData.slice()
        .filter((user) => user.id !== userId)
    dispatch(deleteUserAction(usersList))

}
export const editUser = (data) => async (dispatch, getstate) => {

    const usersList = getstate().user.userData.slice()
        .map((user) => (
            user.id === data.id ?
                data : { ...user }
        ))
    dispatch(userEditAction(usersList))


}
export const searchUser = (SearchKey) => async (dispatch, getstate) => {

    if (SearchKey === '') {
        dispatch(clearFilterResult())
    } else {
        const userList = getstate().user.userData.slice()
            .filter((user) => user.firstName.includes(SearchKey) || user.lastName.includes(SearchKey))
        dispatch(searchUserAction(userList))
    }
}

export const wrokTypeFilter = (SearchKey) => async (dispatch, getstate) => {
    if (SearchKey === '') {
        dispatch(clearFilterResult())
    } else {
        const userList = getstate().user.userData.slice()
            .filter((user) => user.workType.indexOf(SearchKey) > -1)
        dispatch(wrokTypeFilterAction(userList))
    }
}

