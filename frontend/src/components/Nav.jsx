import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../store/user";
function Nav() {
  const {user, setUser}= useUserStore();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  //toggling mobile menu

  //render mentor signup when click
  const signUpMentorBtnClick = () => {
    navigate("/signup/mentor")
  };

  //render students signup when click
  const signUpStudentBtnClick=()=>{
    navigate("/signup/student")
  }

  const signInBtnClick=()=>{
    navigate("/signin")
  }


  return (
    <div className="bg-white ">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <NavLink to="/" className="inline-flex items-center mr-8">
              <span className="ml-2 text-2xl font-bold text-green-700">
                Elevate Hub
              </span>
            </NavLink>
          </div>
          {/* mobile menu */}
          <div className="lg:hidden flex items-center">
            <button
              className="text-gray-600 focus:outline-none cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="text-2xl">&#9776;</span>
            </button>
          </div>

          {/* desktop navigation (visible only when user is not logged in) */}
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <button onClick={signUpMentorBtnClick} className="cursor-pointer h-12 px-6 font-medium tracking-wide text-gray border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white">
                Become a Mentor with Us
              </button>
            </li>

            <li>
              <button onClick={signInBtnClick} className="cursor-pointer font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300" >
                Sign in
              </button>
            </li>

            <li>
              <button
              onClick={signUpStudentBtnClick}
              className="cursor-pointer inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300">
                Sign up
              </button>
            </li>
          </ul>

          {/* When isMobileIsOpen is true */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10 ">
              <button
                className="cursor-pointer block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 border-green-500 bg-green-500  rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white"
                onClick={signUpMentorBtnClick}
              >
                Become a Mentor with Us
              </button>

              {/* sign in */}

              <button onClick={signInBtnClick} className="cursor-pointer block w-full text-center py-2 font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300">
                Sign in
              </button>

              {/* sign up */}
              <button
              onClick={signUpStudentBtnClick}
              className="cursor-pointer block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 border-green-500 bg-green-500  rounded-md hover:bg-green-700 transition-all duration-300 hover:text-white">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
