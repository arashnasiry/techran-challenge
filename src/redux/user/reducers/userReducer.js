import {
    ADD_USER_REQUEST,
    DELETE_USER_REQUEST,
    EDIT_USER_REQUEST,
    SEARCH_USER_REQUEST,
    CLEAR_FILTER_RESULT,
    FILTER_USER_REQUEST,
} from '../types/userTypes'

const userReducer = (state = { userData: [], userFilterd: [], flag: '' }, action) => {
    switch (action.type) {


        case ADD_USER_REQUEST:
            return {
                ...state,
                flag: 'none',
                userData: [...state.userData, { ...action.payload, id: Math.floor(Math.random() * 1000) }],
                userFilterd: []
            }

        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: false,
                userData: action.payload.data,
            }
        case EDIT_USER_REQUEST:
            return {
                ...state,
                loading: false,
                userData: action.payload.data,
            }
        case SEARCH_USER_REQUEST:
            return {
                ...state,
                flag: 'filter',
                userFilterd: action.payload.data,
            }
        case FILTER_USER_REQUEST:
            return {
                ...state,
                flag: 'filter',
                userFilterd: action.payload.data,
            }
        case CLEAR_FILTER_RESULT:
            return {
                ...state,
                flag: 'none',
                userFilterd: [],
            }
        default:
            return state;
    }
}
export default userReducer

