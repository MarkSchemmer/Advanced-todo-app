import Constants from "../constants/constants";

export const createTodo = (payLoad) => {
    return {
        type : Constants.CREATE_TODO,
        payLoad : payLoad
    }
} 

export const naviageCreatetor