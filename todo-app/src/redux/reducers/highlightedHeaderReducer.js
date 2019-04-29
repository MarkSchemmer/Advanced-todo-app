import types from "../constants/constants";

const initState = "/main"


export default  (state = initState, action)  => {
    switch(action.type){
        case types.NAVIGATE_TO_DIFFERENT_PAGE : {
            return action.payload;
        }
        default :
            return state;
    }
}