import { combineReducers } from 'redux'
import  headerReducer  from './highlightedHeaderReducer'
import { todoInputValueReducer } from '../reducers/TodoInputValueReducer'
import { TodosReducer } from './TodosReducer'

export default combineReducers({
    TodosReducer,
    headerReducer,
    todoInputValueReducer
});