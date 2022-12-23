import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import products from './products'
function ProductDetails() {
  var x = useParams()
  const [selectedProduct, setSelectedProduct] = React.useState({})
  useEffect(()=>{
    var temp = products.find((p)=>{
      return p.id==x.id;
    })
    setSelectedProduct({...temp})
  },[x])
  return (
    <div>
      <h1>{selectedProduct.title}</h1>
      <h3>{selectedProduct.price}</h3>
      <img src={selectedProduct.image} width="300px" alt="" />
    </div>
  )
}

export default ProductDetails