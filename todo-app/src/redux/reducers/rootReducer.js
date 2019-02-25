import { combineReducers } from "redux";
import  todosReducer  from "./todos";
import  headerReducer  from "./highlightedHeaderReducer";
export default combineReducers({
    todosReducer,
    headerReducer
});