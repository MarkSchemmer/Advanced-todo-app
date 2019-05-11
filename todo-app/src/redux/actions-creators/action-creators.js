import Constants from "../constants/constants";

export const createTodo = data => ({
        type : Constants.CREATE_TODO,
        payload : data
    })

export const clearInputTodo = () => ({
        type: Constants.CLEAR_TODO_INPUT
    })

export const naviageCreatetor = data => ({
        type : Constants.NAVIGATE_TO_DIFFERENT_PAGE,
        payload : data
    })

export const newInput = data => ({
        type: Constants.TODO_INPUT_CHANGE,
        payload: data
    })

export const updateTodo = data => ({
        type: Constants.UPDATE_TODO,
        payload: data
    })