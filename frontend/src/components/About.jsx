import React from "react";
import mentor from "../assets/mentor.png";

const About = () => {
  return (
    <div className="bg-[#F9F9F9]">
        <div className="px-6 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-28 lg:px-10 lg:py-24">
          <div className="flex flex-col max-w-screen-xl overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md lg:flex-row sm:mx-auto">
            <div className="relative lg:w-1/2">
              <img
                src={mentor} // Update with your own image
                alt="ElevateHub Mentoring"
                className="object-cover w-full lg:absolute h-80 lg:h-full"
              />
              <svg
                className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                viewBox="0 0 20 104"
                fill="currentColor"
              >
                <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
              </svg>
            </div>
            <div className="p-12 bg-[#F1F1F1] lg:p-16 lg:pl-14 lg:w-1/2 rounded-lg shadow-lg">
              <h5 className="mb-4 text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
                Elevate Your Career with ElevateHub
              </h5>
              <p className="mb-6 text-lg text-gray-600">
                <span className="font-semibold text-gray-900">ElevateHub</span>{" "}
                is the ultimate platform designed to connect you with
                experienced mentors who can help you unlock your potential.
                Whether you're seeking career advice, skill development, or
                personal growth, ElevateHub is here to guide you every step of
                the way.
              </p>
              <div className="flex flex-col  sm:flex-row sm:items-center ">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center w-full sm:w-auto h-12 px-8 mb-4 mr-12 sm:mb-0 font-medium tracking-wide text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  disabled
                >
                  Join ElevateHub
                </button>
                <a
                  href="/learn-more"
                  aria-label="Learn more about ElevateHub"
                  className="inline-flex items-center justify-center font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                >
                  Discover More
                  <svg
                    className="inline-block w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.742a6.5 6.5 0 1 0-1.414 1.414 8 8 0 0 1 2.448 2.447l3.181 3.181a1 1 0 1 0 1.415-1.414l-3.182-3.181a8 8 0 0 1-2.448-2.447zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default About;
