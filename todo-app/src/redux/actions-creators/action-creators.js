import Actions from "../constants/constants";

export const createTodo = data => ({
        type : Actions.CREATE_TODO,
        payload : data
})

export const clearInputTodo = () => ({
        type: Actions.CLEAR_TODO_INPUT
})

export const naviageCreatetor = data => ({
        type : Actions.NAVIGATE_TO_DIFFERENT_PAGE,
        payload : data
})

export const newInput = data => ({
        type: Actions.TODO_INPUT_CHANGE,
        payload: data
})

export const updateTodo = data => ({
        type: Actions.UPDATE_TODO,
        payload: data
})

export const deleteTodoById = id => ({
        type: Actions.DELETE_TODO_BY_ID,
        payload : id 
})