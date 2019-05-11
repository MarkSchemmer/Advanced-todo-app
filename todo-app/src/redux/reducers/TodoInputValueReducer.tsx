import Immutable from 'seamless-immutable'
import Actions from '../constants/constants'
const initState = Immutable({
    todoInputValue : ''
})

export const todoInputValueReducer = (state=initState, action) => {
    switch(action.type) {
        case Actions.TODO_INPUT_CHANGE: {
            return state.set('todoInputValue', action.payload)
        }
        case Actions.CLEAR_TODO_INPUT: {
            return state.set('todoInputValue', '')
        }
        default: {
            return state 
        }
    }
}
