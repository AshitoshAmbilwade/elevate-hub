//here we have routes available
import React from "react";
import Home from '../page';
import Signin from "../page/signin";
import Signup from "../page/signup";
import Profile from "../page/dashboard/profile";

const routes =[
    {path:'/',element:<Home/>,isProtected:false},
    {path:'/signin',element:<Signin/>,isProtected:false},
    {path:'/signup/:role',element:<Signup/>,isProtected:false},
    {path:"/dashboard/profile", element:<Profile/>, isProtected:true}
]

//getting data as a parameter /signup/:role

export default routes;
