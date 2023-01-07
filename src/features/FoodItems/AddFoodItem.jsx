import React from 'react'
import { useAddFoodItemMutation } from '../../services/fooditems';

function AddFoodItem() {
  var [newItem,setNewItem] = React.useState({
    "strMeal": "",
    "strMealThumb": "",
    "price": 0,
    "category": ""
  }) 
  var [addFoodItem,response]=useAddFoodItemMutation();
  function handleInput(key,value){
    setNewItem({...newItem,[key]:value})
  }

  function addItem(){
    addFoodItem(newItem).then(()=>{alert("Item added")})
  }
  return (
    <div>
      <h1>Add Food Item</h1>
      <div className="container mt-3">

          <div className="mb-3 mt-3">
            <label for="name">name:</label>
            <input type="name" className="form-control" id="name" placeholder="Enter name" name="name" onChange={(e)=>{handleInput('strMeal',e.target.value)}}/>
          </div>
          <div className="mb-3 mt-3">
            <label for="imageurl">imageurl:</label>
            <input type="imageurl" className="form-control" id="imageurl" placeholder="Enter imageurl" name="imageurl" onChange={(e)=>{handleInput('strMealThumb',e.target.value)}}/>
          </div>
          <div className="mb-3 mt-3">
            <label for="price">price:</label>
            <input type="price" className="form-control" id="price" placeholder="Enter price" name="price"  onChange={(e)=>{handleInput('price',e.target.value)}}/>
          </div>
          <div className="mb-3 mt-3">
            <label for="namecategory">namecategory:</label>
            <input type="namecategory" className="form-control" id="namecategory" placeholder="Enter category" name="namecategory"  onChange={(e)=>{handleInput('category',e.target.value)}}/>
          </div>
         
          <button type="button" className="btn btn-primary" onClick={addItem}>Add Item</button>

      </div>

    </div>
  )
}

export default AddFoodItem