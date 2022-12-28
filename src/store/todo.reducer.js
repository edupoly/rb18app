import { createSelector } from 'reselect';
const initialState = {
  todos:[
    'clear bills',
    'book resort',
    'pay rent'
  ]
}
const todoReducer = (state=initialState,action)=>{
  if(action.type==='ADDTODO'){
    return {...state,todos:[...state.todos,action.payload]}
  }
  if(action.type==='DELTODO'){
    var temp = [...state.todos];
    temp.splice(action.payload,1)
    return {...state,todos:[...temp]}
  }
  return state
}
const allTodos = (state)=>{return state.todos}
export const getTodos = createSelector(allTodos,(todos)=>{
  console.log("memorised getTodos")
  return todos;
})
export default todoReducer