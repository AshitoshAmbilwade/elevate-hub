//here we have routes available
import React from "react";
import Home from '../page';
import Signin from "../page/signin";
import Signup from "../page/signup";

const routes =[
    {path:'/',element:<Home/>,isProtected:false},
    {path:'/signin',element:<Signin/>,isProtected:false},
    {path:'/signup/:role',element:<Signup/>,isProtected:false}
]

//getting data as a parameter /signup/:role

export default routes;
