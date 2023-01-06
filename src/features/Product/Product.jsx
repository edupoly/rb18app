import React from 'react'
import { useGetAllProductsQuery } from '../../services/product'
import axios from 'axios';
function Product() {
  const {isLoading,data} = useGetAllProductsQuery();

  // const [sproducts, setSproducts] = React.useState([])
  // React.useEffect(()=>{
  //   axios.get("https://fakestoreapi.com/products").then((res)=>{
  //     setSproducts(res.data)
  //   })
  // },[])

  return (
    <div className='d-flex flex-wrap'>
      
        {isLoading && (<div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>)}
      {
        data && data.map((product)=>{
          return(
            <div className='w-25 p-5'>
            <h3>{product.title}</h3>
              <img src={product.image} width="100%" alt="" />
            </div>
          )
        })
      }
        
      
    </div>
  )
}

export default Product