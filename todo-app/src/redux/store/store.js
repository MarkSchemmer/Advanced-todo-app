import { createStore } from "redux";
import { applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middleWare = [logger, thunk];
const store = createStore(
    rootReducer,
    applyMiddleware(...middleWare)
);

export default store;