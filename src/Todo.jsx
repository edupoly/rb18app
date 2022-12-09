import React, { useEffect } from 'react'

function Todo({todo,undoTask,doneTask,delTodo,i}) {
  console.log(todo.title+" called")
  useEffect(()=>{},[])
  useEffect(()=>{})
  useEffect(()=>{},todo.title)
  return (

      <li className='d-flex'>
        <div className={(todo.status===true)?'strike':''}>{todo.title}</div>
        <div>
          {
            todo.status===true
            ?(<button onClick={()=>{undoTask(i)}}>Undo</button>)
            :(<button onClick={()=>{doneTask(i)}}>Done</button>)}
          <button onClick={()=>{delTodo(i)}}>Del</button>
        </div>
      </li>
  )
}

export default Todo