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
    filterType: FilterType.All,
    toggledAll: false,
    completedIds: []
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
            const { id, success, updatingCompleted } = action.payload
            const todos = success(state, id)

            return {
                ...state,
                todos,
                completedIds: updatingCompleted&&!state.todos[id].completed ? [...state.completedIds, id] : state.completedIds.filter(item => item !== id) 
            } 
        }
        case Actions.CREATE_TODO: {
            const newTodo = new Todo(action.payload)
            const todos = state.todos.set(newTodo.id, newTodo)
           // const newLen = state.len.set(state.len+1)
          //  debugger;
            return {
                ...state,
                todos,
                len: state.len+1
            }
        }
        case Actions.DELETE_TODO_BY_ID: {
            const todos = state.todos.without(state.todos, action.payload)
            return {
                ...state,    
                todos,
                len: state.len-1
            }
        }
        case Actions.DECREMENT_LEN: {
            return {
                ...state,
                len: state.len-1
            }
        }
        case Actions.INCREMENT_LEN: {
            return {
                ...state,
                len: state.len+1
            }
        }
        case Actions.UPDATE_FILTER_TYPE: {
            return {
                ...state,
                filterType: action.payload 
            }
        }
        case Actions.TOGGLE_ALL_TODOS: {
            const newCompleted = !state.toggledAll
            return {
                ...state,
                toggledAll: newCompleted,
                todos: Object.entries(state.todos).map( ([key, value]:any)  => {
                    const newValue = value.set('completed', newCompleted)
                    return [ key, newValue ] 
                }).reduce((acc,[key, value]) => {
                    const newValue = acc.set(key, value)
                    return newValue 
                }, state.todos ),
                completedIds: newCompleted ? Object.keys(state.todos) : []
            }
        }
        case Actions.CLEAR_COMPLETED: {
            const withoutCompleted = state.todos.without((acc, cur) => {
                return acc.completed 
            })
            return {
                ...state,
                todos: withoutCompleted,
                completedIds: []
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