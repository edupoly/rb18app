import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo } from './todolistSlice';

function Todolist() {
  var {todos}=useSelector(state=>state.todolist)
  var dispatch = useDispatch();
  const [newtodo, setNewtodo] = React.useState('')
  return (
    <div className='border border-2 border-success m-2 p-2'>
      <h1>Todolist</h1>
      <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={()=>{dispatch(addtodo(newtodo))}}>Add Todo</button>
      <ul>
        {
          todos&&todos.map(function(todo){
            return <li>{todo}</li>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist