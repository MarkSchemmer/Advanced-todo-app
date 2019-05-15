import Actions from "../constants/constants";


function has(object, key) {
    return object ? Object.prototype.hasOwnProperty.call(object, key) : false;
 }

 const updateValue = value => (state, id) => 
            state.todos.set(id, {...state.todos[id], value })

const updateCompleted = completed => (state, id) => 
            state.todos.set(id, {...state.todos[id], completed })



const updateTodo = ({dispatch, getState}) => next => action => {
    if(action.type === 'UPDATE_TODO' && has(action.payload, 'value')) {
        const { id, value } = action.payload
        dispatch({
            type: Actions.UPDATE_TODO,
            payload: {
                id, 
                success: updateValue(value)
            }
        })
    } else if(action.type === 'UPDATE_TODO' && has(action.payload, 'completed')) {
        const {id, completed } = action.payload
        dispatch({
            type: Actions.UPDATE_TODO,
            payload: {
                id, 
                success: updateCompleted(completed)
            }
        })
    } else {
        next(action) 
    }
}

export default updateTodo