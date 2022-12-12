import React,{useState} from 'react'
import {motion} from 'framer-motion'
import Todo from './Todo'
function Todolist() {
  alert("Todo list rendered")
  const [todos, setTodos] = useState([
                                        {title:'clear junk',status:false},
                                        {title:'purchase fruits',status:false},
                                        {title:'pens stand',status:true},
                                        {title:'eat biryani',status:false}
                                      ])
  const [newtodo, setNewtodo] = useState('')
  function handleChange(e){
    setNewtodo(e.target.value)
  }
  function addTodo(){
    setTodos([...todos,{title:newtodo,status:false}])
  }
  function delTodo(index){
    var temp = [...todos];
    temp.splice(index,1)
    setTodos([...temp])
  }
  function undoTask(index){
    var temp = [...todos];
    temp[index].status = false
    setTodos([...temp])
  }
  function doneTask(index){
    var temp = [...todos];
    temp[index].status = true
    setTodos([...temp])
  }
  return (
    <div className='border border-info border-3 p-2'>
      <h1>Todolist</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul className='p-0'>
        {
          todos.map((todo,i)=>{
            return <Todo todo={todo} undoTask={undoTask} doneTask={doneTask} delTodo={delTodo} i={i} key={todo.title}></Todo>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist
