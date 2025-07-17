import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserStore from "../store/user";
import { Dropdown, Menu } from "antd";
import { removeToken } from "../helper";
const Nav = () => {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();
  const signUpStudentBtnClick = () => navigate("/signup/student");
  const signUpMentorBtnClick = () => navigate("/signup/mentor");
  const signInBtnClick = () => navigate("/signin");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onLogoutButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };
  const menu = {
    items: [
      {
        key: "1",
        label: (
          <NavLink
            to="/dashboard/profile"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Dashboard
          </NavLink>
        ),
      },
      {
        key: "2",
        label: (
          <button
            onClick={onLogoutButtonClick}
            className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
          >
            Logout
          </button>
        ),
      },
    ],
  };

  return (
    <>
      <div className="bg-white">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <NavLink to="/" className="inline-flex items-center mr-8">
                <span className="ml-2 text-2xl font-bold text-green-700">
                  Elevate Hub
                </span>
              </NavLink>
            </div>

            {/* mobile menu button */}
            {!user && (
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="cursor-pointer text-gray-600 focus:outline-none"
                >
                  <span className="text-2xl">&#9776;</span>
                </button>
              </div>
            )}

            {/* Desktop Navigation(only visible when user is not logged in) */}
            {!user ? (
              <ul className="items-center hidden space-x-8 lg:flex">
                <li>
                  <button
                    onClick={signUpMentorBtnClick}
                    className="cursor-pointer h-12 px-6 font-medium tracking-wide text-gray border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
                  >
                    Become a Mentor with Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={signInBtnClick}
                    className="cursor-pointer font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300"
                  >
                    Sign in
                  </button>
                </li>
                <li>
                  <button
                    onClick={signUpStudentBtnClick}
                    className="cursor-pointer inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300"
                  >
                    Sign up
                  </button>
                </li>
              </ul>
            ) : (
              <Dropdown menu={menu} trigger={["hover"]}>
                <button
                  className="cursor-pointer uppercase w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white font-bold shadow-md hover:shadow-lg transition-all duration-300"
                  title={user.name}
                >
                  {user.name.charAt(0)}
                </button>
              </Dropdown>
            )}

            {/* when isMobielIsOpen is true */}
            {!user && isMobileMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10">
                <button className=" cursor-pointer block w-full text-center py-2 font-medium tracking-wide text-gray-800 border-4 border-green-500 bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white">
                  Become a Mentor with Us
                </button>

                {/* signin */}
                <button className=" cursor-pointer
                block w-full text-center py-2 font-medium tracking-wide text-green-500 hover:text-green-700 transition-all duration-300">
                  Sign in
                </button>
                <button className=" cursor-pointer block w-full text-center py-2 font-medium tracking-wide text-white bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300">
                  Sign up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
