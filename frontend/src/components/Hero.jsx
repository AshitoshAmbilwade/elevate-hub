import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-green-100 py-16 px-6 md:py-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-800 leading-tight">
            <span className="text-5xl md:text-7xl text-green-900">
              Elevate Hub:
            </span>
            <br />
            Your journey, our guidance
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-green-700">
            Every great achiever was inspired by a great mentor. Find yours
            today!
          </p>
          <div className="mt-8">
            <NavLink to="/mentors">
              <button className="px-8 py-3 text-white text-lg font-medium bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition duration-300">
                Match with a Mentor
              </button>
            </NavLink>
          </div>
        </div>

        {/* image section */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <img
              className="w-full max-w-lg rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Mentorship Hub"
            />
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-green-900 bg-opacity-10 rounded-lg animate-pulse duration-2000 delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
