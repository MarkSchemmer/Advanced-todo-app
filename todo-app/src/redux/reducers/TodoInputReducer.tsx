import Actions from '../constants/constants'



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
                todos:[...state.todos, action.payload]
            }
        }
        case Actions.CLEAR_TODO_INPUT: {
            return {
                ...state, 
                todoValue: ''
            }
        }
        default: {
            return state
        }
    }
}

// Later let's refactor on how to implement a functional reducer...

// const switchcase = cases => defaultCase => key =>
//     cases.hasOwnProperty(key) ? cases[key] : defaultCase


// const switchcaseF = cases => defaultCase => key =>
//     switchcase(cases)(defaultCase)(key)()




// export const TodoInputReducer = (state=initState, action) => 
//             switchcaseF({
//                 : () => action.data
//             })(() => state ) (action.type) 