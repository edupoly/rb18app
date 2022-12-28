import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
function TodoList(props) {
  console.log("props in TodoList",props)
  const [newtodo, setNewtodo] = useState('');
  const newtodoref = React.useRef()
  React.useEffect(()=>{
    setNewtodo('')
    newtodoref.current.value='';
    newtodoref.current.focus()
  },[props.todos])
  return (
    <div className='border border-2 border-success p-2 m-2'>
      <h1>Todo List</h1>
      <input type="text" ref={newtodoref} onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={()=>{props.addTodo(newtodo)}} disabled={newtodo===''?true:false}>Add Todo</button>
      {
        props.todos.map((todo,i)=>{
          return <li>
            {todo}
            <button onClick={()=>{props.deleteTodo(i)}}>Delete</button>
          </li>
        })
      }
    </div>
  )
}
function mapStateToProps(state){
  return state.todos
}
function mapDispatchToProps(dispatch){
  return {
    addTodo:(todo)=>{dispatch({type:'ADDTODO',payload:todo})},
    deleteTodo:(ind)=>{dispatch({type:'DELTODO',payload:ind})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)
