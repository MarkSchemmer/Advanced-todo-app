
/*
    Later entitys and design will implemented I'm just getting started with this project.
*/

import types from "../constants/constants";

const initState = {
    todos : []
};

export default (state = initState, action)  => {
    switch(action.type){
        // case types.CREATE_TODO : {
        //     return Object.assign({}, state, { todos : [...state.todos, action.payload]});
        // }
        default :
            return state;
    }
}