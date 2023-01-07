import { configureStore, createSlice } from "@reduxjs/toolkit";

var billSlice = createSlice({
  name:'bill',
  initialState:{
    items:[]
  },
  reducers:{
    addItem:(state,action)=>{
      state.items.push(action.payload)
    },
    deleteItem:(state,action)=>{
      state.items.splice(action.payload,1)
    },
    reset:(state)=>{
      state.items=[]
    }
  }
})
export const {addItem,deleteItem,reset}=billSlice.actions
export default billSlice.reducer