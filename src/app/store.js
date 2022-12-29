import counterReducer from '../features/Counter/counterSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer:{
    counter:counterReducer
  }
})
