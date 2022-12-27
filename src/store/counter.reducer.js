const initialState = {
  count:3530
}

const counterReducer = (state=initialState,action)=>{
  if(action.type==='INC'){
    return {...state,count:state.count+1}
  }
  if(action.type==='DEC'){
    return {...state,count:state.count-1}
  }
  if(action.type==='RESET'){
    return {...initialState}
  }
  return state
}

export default counterReducer;