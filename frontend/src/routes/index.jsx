//here we have routes available
import React from "react";
import Home from '../page';
import Signin from "../page/signin";

const routes =[
    {path:'/',element:<Home/>,isProtected:false},
    {path:'/signin',element:<Signin/>,isProtected:false}
]

export default routes;
