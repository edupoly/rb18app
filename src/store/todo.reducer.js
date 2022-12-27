const initialState = {
  todos:[
    'clear bills',
    'book resort'
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

export default todoReducer