import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Mypage from './Mypage';
import Products from './products';
import Productmaster from './Productmaster';
import ProductDetails from './ProductDetails';
import Productmaster2 from './ProductMaster2';

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[{
                path:'/yourpage',
                element:<Mypage></Mypage>
            },
            {
                path:'/products',
                element:<Productmaster></Productmaster>
            },
            {
                path:'/productDetails/:id/:price',
                element:<ProductDetails></ProductDetails>
            },
            {
                path:'/products2',
                element:<Productmaster2></Productmaster2>,
                children:[
                    {
                        path:'/products2/:id',
                        element:<ProductDetails></ProductDetails>
                    }
                ]
            }
        ]
    },
    {
        path:'/mypage',
        element:<Mypage></Mypage>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}></RouterProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
