import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countries'

function Countries() {
  var x = useGetAllCountriesQuery();
  console.log("X::",x)
  return (
    <div>
      <h1>Countries</h1>
      <ul className='d-flex flex-wrap'>
        {
          x.data.map((country)=>{
            return <li className='w-25 p-5'>
              {country.name}
              <img src={country.flag} width="100%"></img>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default Countries