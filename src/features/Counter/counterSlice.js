import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name:'counter',
  initialState:{count:102},
  reducers:{
    increment:(state,action)=>{
      state.count=state.count+1;
    },
    decrement:(state,action)=>{
      state.count=state.count-1
    },
    reset:(state,action)=>{
      state.count=102
    }
  }
})

export const {increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer