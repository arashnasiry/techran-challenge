import { createStore, applyMiddleware, combineReducers, compose } from "redux"
import thunk from "redux-thunk"
import userReducer from "./user/reducers/userReducer"
const initialState = {}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(combineReducers({
    user: userReducer,
}),
    initialState,
    composeEnhancer(applyMiddleware(thunk))

)
export default store