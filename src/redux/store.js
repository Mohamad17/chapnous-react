import { configureStore } from "@reduxjs/toolkit";
// import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const store= configureStore({
    reducer: rootReducer
},applyMiddleware([thunk, logger]));

export default store;