import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux'
function TodoList(props) {
  console.log("props in TodoList",props)
  const [newtodo, setNewtodo] = useState('');
  const newtodoref = React.useRef()
  function addTodo(){
    props.dispatch({type:'ADDTODO',payload:newtodo});
    setNewtodo('')
    newtodoref.current.value='';
    newtodoref.current.focus()
  }
  function delTodo(index){
    props.dispatch({type:'DELTODO',payload:index})
  }
  return (
    <div className='border border-2 border-success p-2 m-2'>
      <h1>Todo List</h1>
      <input type="text" ref={newtodoref} onChange={(e)=>{setNewtodo(e.target.value)}}/>
      <button onClick={addTodo} disabled={newtodo===''?true:false}>Add Todo</button>
      {
        props.todos.todos.map((todo,i)=>{
          return <li>
            {todo}
            <button onClick={()=>{delTodo(i)}}>Delete</button>
          </li>
        })
      }
    </div>
  )
}

export default connect(function(store){return store})(TodoList)
