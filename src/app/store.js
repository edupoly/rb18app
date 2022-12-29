import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/Counter/counterSlice'
import todolistReducer from '../features/Todolist/todolistSlice'
export const store = configureStore({
  reducer:{
    counter:counterReducer,
    todolist:todolistReducer
  }
})