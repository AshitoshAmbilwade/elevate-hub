import React from "react";
import TopMentors from "./TopMentors";

const MentorCategories = () => {
  return (
    <section className="px-8 py-20 bg-gray-100">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start">
          {/* Left Section - Heading & Description */}
          <div className="mb-8 md:w-1/3 md:mr-12">
            <h2 className="text-4xl font-extrabold text-green-700">
              Find the Right Mentor for You
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Unlock growth opportunities with expert mentors. Whether you're
              aiming to boost your career, enhance your skills, or explore new
              fields, Elevate Hub has the perfect mentor for you.
            </p>
            <a className="inline-flex items-center px-6 py-3 mt-6 text-white transition duration-300 bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:shadow-lg">
              Get Started
              <svg
                className="w-4 h-4 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>

          {/* Right Section - Categories Grid */}
          <div className="grid flex-grow grid-cols-2 gap-6 md:grid-cols-3">
            {[
              "Career Coaches",
              "Business Mentors",
              "Creative Mentors",
              "Tech Experts",
              "Marketing Gurus",
              "Finance Advisors",
              "Wellness Coaches",
              "Education Mentors",
              "Social Impact Leaders",
            ].map((category, index) => (
              <a
                key={index}
                href="/"
                onClick={(e) => e.preventDefault()} // Prevents page reload
                className="block p-4 text-center transition duration-300 border rounded-lg shadow-sm bg-white text-gray-800 
                       border-green-400 hover:bg-green-500 hover:text-white hover:shadow-lg cursor-not-allowed"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Image Section with Overlay */}
        <div className="relative mt-10">
          <img
            className="object-cover w-full h-56 sm:h-96 rounded-lg shadow-md"
            src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Mentorship"
          />
          <div className="absolute inset-0 bg-green-900 bg-opacity-30 rounded-lg animate-pulse duration-2000 delay-2000"></div>
          <div/>

        </div>
      </div>

      <section
        style={{
          background: 'linear-gradient(to bottom right, #f3f4f6, #e5e7eb)',
          backgroundSize: '200% 200%',
          animation: 'gradientAnimation 6s ease infinite',
        }}
      >
        <div className="container mx-auto">
          <TopMentors />
        </div>
      </section>
    </section>
    
  );
};

export default MentorCategories;
