import React from "react";

function Todolist(){
  var [newtask,setnewtask] = React.useState('');
  var [tasks,setTasks] = React.useState([])
  function anc(e){
    setnewtask(e.target.value)
  }
  function addTask(){
    setTasks([...tasks,newtask])
  }
  return(
    <div className="text-center border border-3 m-2 p-2 border-info">
      <h1>Todolist</h1>
      <input type="text" onChange={anc}/>
      <button onClick={addTask}>Add Task</button>
      {
        tasks.map((task)=>{
          return(<li>{task}</li>)
        })
      }
    </div>
  )
}

export default Todolist