import { ADDTODO,DELTODO } from "./actiontypes"
export function addTodoItem(todo){
  return {type:ADDTODO,payload:todo}
}

export function deleteTodoItem(index){
  return {type:DELTODO,payload:index}
}