import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAddBillMutation } from '../../services/fooditems'
import { reset } from './billSlice'

function Bill() {
  var {items}=useSelector(state=>state.bill)
  const [total, setTotal] = React.useState(0)
  var [addBill,response]=useAddBillMutation();
  var dispatch = useDispatch()
  console.log("billitems::",items)
  useEffect(()=>{
    var temp = items.reduce((sum,item)=>sum+item.price,0)
    setTotal(temp)
  },[items])
  function checkout(){
    var bill= {
      billtime:Date.now(),
      billItems:items
    }
    addBill(bill).then(()=>{alert('Print');dispatch(reset())})
  }

  return (
    <div>
      <h3>Bill</h3>
      {
        items && items.map((item)=>{
          return(<div className='d-flex justify-content-between'>
            <div className='w-75 p-1'>{item.strMeal}</div>
            <div className='w-25 p-1'>{item.price}</div>
          </div>)
        })
      }
      <div className='h1 d-flex justify-content-between'>

        <div className='w-75 p-1'>Total:</div>
        <div className='w-25 p-1'>{total}</div>
      </div>
      <button className='btn btn-success' onClick={checkout}>Checkout</button> 
    </div>
  )
}

export default Bill