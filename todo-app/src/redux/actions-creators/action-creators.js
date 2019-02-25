import Constants from "../constants/constants";
import store from "../store/store";

export const createTodo = (data) => {
    return {
        type : Constants.CREATE_TODO,
        payLoad : data
    }
} 

export const naviageCreatetor = (data) => {
    return {
        type : Constants.NAVIGATE_TO_DIFFERENT_PAGE,
        payLoad : data
    }
}