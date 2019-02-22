import { combineReducers } from "react-redux";
import { todosReducer } from "./todos";

export default combineReducers(
    todosReducer
);