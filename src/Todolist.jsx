import React,{useState} from 'react'

function Todolist() {
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
    setTodos([...todos,newtodo])
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
      <ul>
        {
          todos.map((todo,i)=>{
            return <li className={(todo.status===true)?'text-decoration-line-through':''}>
              {todo.title}
              {
                todo.status===true
                ?(<button onClick={()=>{undoTask(i)}}>Undo</button>)
                :(<button onClick={()=>{doneTask(i)}}>Done</button>)}
              <button onClick={()=>{delTodo(i)}}>Del</button>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Todolist