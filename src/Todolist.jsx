import React,{useState} from 'react'
import Todo from './Todo'

function Todolist() {
  const [todos, setTodos] = useState(['clear junk','purchase fruits'])
  const [newtodo, setNewtodo] = useState('')
  function handleChange(e){
    setNewtodo(e.target.value)
  }
  function addTodo(){
    setTodos([...todos,newtodo])
  }
  function delTodo(index){
    var temp = [...todos];
    temp.splice(index,1)
    setTodos([...temp])
  }
  
  return (
    <div className='border border-info border-3 p-2'>
      <h1>Todolist</h1>
      <input type="text" onChange={handleChange}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {
          todos.map((todo,i)=>{
            return <Todo todo={todo} delTodo={delTodo} i={i}></Todo>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist

