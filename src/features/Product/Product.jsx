import React from 'react'
import { useGetAllProductsQuery } from '../../services/product'

function Product() {
  const products = useGetAllProductsQuery();
  const [sproducts, setSproducts] = React.useState([])
  React.useEffect(()=>{
    
  },[])
  console.log(products)
  return (
    <div>Product</div>
  )
}

export default Product