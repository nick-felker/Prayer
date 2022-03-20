import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";
import taskReducer from "./task/taskReducer";

const RootReducer = combineReducers({
    user: userReducer,
    task: taskReducer,
})


export default RootReducer;