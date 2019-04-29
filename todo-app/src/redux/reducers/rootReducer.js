import { combineReducers } from 'redux'
import  todosReducer  from './todos'
import  headerReducer  from './highlightedHeaderReducer'
import { TodoInputReducer } from '../reducers/TodoInputReducer'

export default combineReducers({
    todosReducer,
    headerReducer,
    TodoInputReducer
});