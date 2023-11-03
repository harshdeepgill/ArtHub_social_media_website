import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import postReducer from "./addPostReducer";
import registerReducer from "./registerReducer";

const rootReducer = combineReducers({
    postReducer,
    registerReducer
})


const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store