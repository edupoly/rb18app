import React from 'react';
import './Counter.css'
function Counter(){
  var [count,setCount]=React.useState(0)
  return(
    <div className='border border-2 p-2 m-5 border-success myboxshadow'>
      <h1>Count:{count}</h1>
    </div>
  )
}

export default Counter;