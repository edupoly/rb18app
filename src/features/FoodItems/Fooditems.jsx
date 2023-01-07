import React from 'react'
import { useDispatch } from 'react-redux';
import { useGetAllFoodItemsQuery } from '../../services/fooditems';
import Bill from '../Bill/Bill';
import { addItem } from '../Bill/billSlice';


function FoodItems() {
  const {isLoading,data} = useGetAllFoodItemsQuery();
  
  const dispatch=useDispatch();
  return (
      <div className='d-flex flex-wrap'>
        {isLoading 
        && (<div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>)}
        <div style={{width:'70%'}} className='d-flex flex-wrap'>  
            {
              data && data.map((item)=>{
                return(
                  <div className='p-3' style={{width:'200px'}}>
                    <b>{item.strMeal}</b><br></br>
                    <img src={item.strMealThumb} className="img-thumbnail" width="100%" alt="" />
                    <div className='m-2 text-center'>
                      <div className='btn btn-danger' onClick={()=>{dispatch(addItem(item))}}>Add To Cart</div>
                    </div>
                  </div>
                )
              })
            }
        </div> 
        <div className='' style={{width:'30%'}}>
          <Bill></Bill>
        </div>
        
      </div>
  )
}

export default FoodItems

// "id": "l8a7ei50etbtcl6ukm",
// "strMeal": "Baingan Bharta",
// "strMealThumb": "https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg",
// "price": 80,
// "category": "veg"