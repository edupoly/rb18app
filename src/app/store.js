import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../features/Counter/counterSlice'
import todolistReducer from '../features/Todolist/todolistSlice'
import { productApi } from "../services/product";
export const store = configureStore({
  reducer:{
    counter:counterReducer,
    todolist:todolistReducer,
    [productApi.reducerPath]:productApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware)
})