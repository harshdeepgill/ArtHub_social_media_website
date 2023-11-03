import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./addPostReducer";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    postReducer,
    authReducer
})


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store