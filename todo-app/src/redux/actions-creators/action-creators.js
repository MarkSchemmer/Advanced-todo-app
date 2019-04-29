import Constants from "../constants/constants";

export const createTodo = data => {
    return {
        type : Constants.CREATE_TODO,
        payload : data
    };
} 

export const naviageCreatetor = data => {
    return {
        type : Constants.NAVIGATE_TO_DIFFERENT_PAGE,
        payload : data
    };
}

export const newInput = data => {
    return {
        type: Constants.TODO_INPUT_CHANGE,
        payload: data
    }
}