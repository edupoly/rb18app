import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
  console.log("props in counter component",props)
  function inc(){
    props.dispatch({type:'INC'})
  }
  function dec(){
    props.dispatch({type:'DEC'})
  }
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h2>Counter:{props.counter.count}</h2>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  )
}

export default connect(function(store){return store})(Counter)
