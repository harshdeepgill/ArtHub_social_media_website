import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./addPostReducer";


const rootReducer = combineReducers({
    postReducer
})


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store