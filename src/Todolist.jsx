import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
function Todolist() {

  const [todos, setTodos] = useState([
                                        {title:'clear junk',status:false,id:uuidv4()},
                                        {title:'purchase fruits',status:false,id:uuidv4()},
                                        {title:'pens stand',status:true,id:uuidv4()},
                                        {title:'eat biryani',status:false,id:uuidv4()}
                                      ])
  const [newtodo, setNewtodo] = useState('')
  function handleChange(e){
    setNewtodo(e.target.value)
  }
  function addTodo(){
    setTodos([...todos,{title:newtodo,status:false,id:uuidv4()}])
  }
  var delTodo=React.useCallback((index)=>{
    var temp = [...todos];
    temp.splice(index,1)
    setTodos([...temp])
  },[])
  var undoTask=React.useCallback((index)=>{
    var temp = [...todos];
    temp[index].status = false
    setTodos([...temp])
  },[])
  var doneTask=React.useCallback((index)=>{
    var temp = [...todos];
    temp[index].status = true
    setTodos([...temp])
  },[])
  return (
    <div className='border border-info border-3 p-2'>
      <h1>Todolist</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul className='p-0'>
        {
          todos.map((todo,i)=>{
            return <Todo title={todo.title} status={todo.status} id={todo.id} undoTask={undoTask} doneTask={doneTask} delTodo={delTodo} i={i} key={todo.id}></Todo>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist
