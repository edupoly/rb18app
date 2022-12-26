import React from 'react'
import {connect} from 'react-redux'
function Counter(props) {
  console.log("props in counter component",props)
  return (
    <div className='border border-2 border-info p-2 m-2'>
      <h2>Counter:{props.counter.count}</h2>
    </div>
  )
}

export default connect(function(store){return store})(Counter)