import React from 'react'
import { useGetAllProductsQuery } from '../../services/product'

function Product() {
  const products = useGetAllProductsQuery()
  console.log(products)
  return (
    <div>Product</div>
  )
}

export default Product