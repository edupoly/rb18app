import React from 'react'

function Todo(props) {
  React.useEffect(()=>{
    console.log("rendered:",props.todo)
  })
  return (
    <div className='border border-2 p-2'>
       <li>
        {props.todo}
        <button onClick={()=>{props.delTodo(props.i)}}>Del</button>
       </li>
    </div>
  )
}

export default React.memo(Todo)