import Actions from '../constants/constants'
import { Todo, todoSchemaList } from '../../Entities/Todo'
import { normalize } from 'normalizr'
import Immutable  from 'seamless-immutable'
import { createSelector } from 'reselect'
const genArray = () => {
    const a: Todo[] = [];
    for(let i = 1; i < 500; i++) {
        const todo = new Todo(i.toString())
        a.push(todo)
    }
    
    const normalizeData = normalize(a, todoSchemaList);
    return normalizeData 
}


// All
// Completed
// Active

export enum FilterType {
    All = 'All',
    Completed = 'Completed',
    Active = 'Active'
}


const initState = Immutable({
    todos: {},
    len: 0,
    filterType: FilterType.All
})


const getFilter = (state:any) => state.filterType
const getTodos = (state:any) => state.todos 

export const filterTodos = createSelector(
    getFilter, getTodos, 
    (f, t) => {
      //  debugger;
        switch(f) {
            case FilterType.All: {
                return Object.entries(t) 
            }
            case FilterType.Completed: {
                return Object.entries(t).filter( ([ key, value ]: any ) => value.completed )
            }
            case FilterType.Active: {
                return Object.entries(t).filter( ([ key, value]: any ) => !value.completed )
            }
        }
    } 
)

export const TodosReducer = (state=initState, action) => {
    switch(action.type) {
        case Actions.UPDATE_TODO: {
            const { id, success } = action.payload
            const todos = success(state, id)
            return {
                todos,
                len: state.len,
                filterType:state.filterType,
            } 
        }
        case Actions.CREATE_TODO: {
            const newTodo = new Todo(action.payload)
            const todos = state.todos.set(newTodo.id, newTodo)
           // const newLen = state.len.set(state.len+1)
          //  debugger;
            return {
                todos,
                filterType:state.filterType,
                len: state.len+1  
            }
        }
        case Actions.DELETE_TODO_BY_ID: {
            const todos = state.todos.without(state.todos, action.payload)
            return {    
                todos,
                len: state.len-1,
                filterType:state.filterType
            }
        }
        case Actions.DECREMENT_LEN: {
            return {
                todos: state.todos,
                len: state.len-1,
                filterType:state.filterType
            }
        }
        case Actions.INCREMENT_LEN: {
            return {
                todos: state.todos,
                len: state.len+1,
                filterType:state.filterType
            }
        }
        case Actions.UPDATE_FILTER_TYPE: {
            return {
                ...state,
                filterType: action.payload 
            }
        }
        default: {
            return state
        }
    }
}

// Later let's refactor on how to implement a functional reducer...

// const   = cases => defaultCase => key =>
//     cases.hasOwnProperty(key) ? cases[key] : defaultCase

// const switchcaseF = cases => defaultCase => key =>
//     switchcase(cases)(defaultCase)(key)()

// export const TodoInputReducer = (state=initState, action) => 
//             switchcaseF({
//                 : () => action.data
//             })(() => state ) (action.type) 