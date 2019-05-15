import Actions from '../constants/constants'
import { Todo, todoSchemaList } from '../../Entities/Todo'
import { normalize } from 'normalizr'
import Immutable  from 'seamless-immutable'
const genArray = () => {
    const a: Todo[] = [];
    for(let i = 1; i < 500; i++) {
        const todo = new Todo(i.toString())
        a.push(todo)
    }


    const normalizeData = normalize(a, todoSchemaList);
    console.log(normalizeData);
    return normalizeData 
}
const initState = Immutable({
    todos: {}
})


export const TodosReducer = (state=initState, action) => {
    switch(action.type) {
        case Actions.UPDATE_TODO: {
            const { id, success } = action.payload
            const todos = success(state, id)
            return {
                todos
            } 
        }
        case Actions.CREATE_TODO: {
            const newTodo = new Todo(action.payload)
            const todos = state.todos.set(newTodo.id, newTodo)
            return {
                todos 
            }
        }
        case Actions.DELETE_TODO_BY_ID: {
            const todos = state.todos.without(state.todos, action.payload)
            return {    
                todos
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