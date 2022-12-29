import { configureStore, createSlice } from "@reduxjs/toolkit";

var todolistSlice = createSlice({
  name:'todolist',
  initialState:{
    todos:['payrent','arrange party']
  },
  reducers:{
    addtodo:(state,action)=>{
      state.todos.push(action.payload)
    },
    deletetodo:(state,action)=>{
      state.todos.splice(action.payload,1)
    }
  }
})
export const {addtodo,deletetodo}=todolistSlice.actions
export default todolistSlice.reducer