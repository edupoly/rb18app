import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const countriesApi = createApi({
  reducerPath:'countriesApi',
  baseQuery:fetchBaseQuery({baseUrl:'https://restcountries.com/v2/'}),
  endpoints:(builder)=>({
    getAllCountries:builder.query({
      query:()=>{return 'all'}
    })
  })
})

export const {useGetAllCountriesQuery} = countriesApi