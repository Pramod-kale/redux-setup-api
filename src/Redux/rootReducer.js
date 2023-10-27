// import library components
import { combineReducers } from "@reduxjs/toolkit";

// import reducers
import { counterSlice } from './Slices/Counter/counter.slice';
import todoReducer from './Slices/fetchTodo/fetchTodo.slice'

export const rootReducer = combineReducers({
    counterSlice,
    todoReducer
})

