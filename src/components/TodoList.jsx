import React from 'react'
import {connect} from 'react-redux'
function TodoList(props) {
  console.log("props in TodoList",props)
  return (
    <div className='border border-2 border-success p-2 m-2'>
      <h1>Todo List</h1>
      {
        props.todos.todos.map((todo)=>{
          return <li>{todo}</li>
        })
      }
    </div>
  )
}

export default connect(function(store){return store})(TodoList)
