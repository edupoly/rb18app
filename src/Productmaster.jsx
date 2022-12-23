import React from 'react'
import { Link } from 'react-router-dom'
import products from './products'
function Productmaster() {
  return (
    <div>
      {
        products.map((p,i)=>{
          return <li>
            <Link to={`/productDetails/${p.id}/${p.price}`}>{p.title}</Link>
            </li> 
        })
      }
    </div>
  )
}

export default Productmaster