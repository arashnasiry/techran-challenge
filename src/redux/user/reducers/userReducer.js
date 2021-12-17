import {
    ADD_USER_REQUEST,

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

        default:
            return state;
    }
}
export default userReducer

