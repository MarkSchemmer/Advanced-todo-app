import Actions from '../constants/constants'
import { Todo } from '../../Entities/Todo'
import todos from './todos';


const initState = {
    todoValue:'',
    todos:[]
}


export const TodoInputReducer = (state=initState, action) => {
    switch(action.type) {
        case Actions.TODO_INPUT_CHANGE: {
            return {
                ...state,
                todoValue: action.payload
            }
        }
        case Actions.CREATE_TODO: {
            return {
                ...state,
                todos:[...state.todos, new Todo(action.payload)]
            }
        }
        case Actions.CLEAR_TODO_INPUT: {
            return {
                ...state, 
                todoValue: ''
            }
        }
        case Actions.UPDATE_TODO: {
            const { id, value } = action.payload
            return {
                ...state,
                todos: state.todos.map(i => i.id === id ? {...i, value} : i)
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