import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/Counter/counterSlice'
import todolistReducer from '../features/Todolist/todolistSlice';
import billReducer from '../features/Bill/billSlice'
import { countriesApi } from "../services/countries";
import { productApi } from "../services/product";
import { foodItemsApi } from '../services/fooditems'

export const store = configureStore({
  reducer:{
    counter:counterReducer,
    todolist:todolistReducer,
    bill:billReducer,
    [productApi.reducerPath]:productApi.reducer,
    [countriesApi.reducerPath]:countriesApi.reducer,
    [foodItemsApi.reducerPath]:foodItemsApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware,countriesApi.middleware,foodItemsApi.middleware)
})