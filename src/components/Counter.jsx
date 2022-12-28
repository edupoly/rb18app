import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
  console.log("props in counter component",props);
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h2>Counter:{props.count}</h2>
      <button onClick={props.inc}>Increment</button>
      <button onClick={props.dec}>Decrement</button>
    </div>
  )
}
function mapStateToProps(state){
  return state.counter
}
function mapDispatchToProps(dispatch){
  return {
    inc: function (){
      dispatch({type:'INC'})
    },
    dec: function(){
      dispatch({type:'DEC'})
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)
