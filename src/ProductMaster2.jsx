import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import products from './products'
function Productmaster2() {
  return (
    <div className='d-flex'>
      <div className='w-50'>
        {
          products.map((p,i)=>{
            return <li>
                <Link to={`/products2/${p.id}`}><i>{p.title}</i></Link>
              </li> 
          })
        }
      </div>
      <div className='w-50'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Productmaster2