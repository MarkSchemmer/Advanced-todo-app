import { createStore } from "redux";
import { applyMiddleware } from "react-redux";
import rootReducer from "../reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWare = [logger, thunk];
const initState = {};
const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(...middleWare)
);

export default store;