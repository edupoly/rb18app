import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './counterSlice'

function Counter() {
  var count = useSelector(state=>state.counter.count)
  var dispatch = useDispatch()
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
    </div>
  )
}

export default Counter