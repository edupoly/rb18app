import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const foodItemsApi=createApi({
  reducerPath:'foodItemsApi',
  baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000/'}),
  endpoints:(builder)=>({
    getAllFoodItems:builder.query({
      query:()=>`fooditems`,
    }),
    addBill:builder.mutation({
      query:(payload)=>({
        url:'/bills',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    }),
    addFoodItem:builder.mutation({
      query:(payload)=>({
        url:'/fooditems',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      })
    })
  })
})
export const {useGetAllFoodItemsQuery,useAddBillMutation,useAddFoodItemMutation} = foodItemsApi
