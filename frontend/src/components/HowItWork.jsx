import React from "react";
import mentor from '../assets/mentor.png';

const HowItWork = () => {
  return (

    <section className="px-6 py-10 bg-[#f3f4f6]">
      <div className="container mx-auto text-center max-w-screen-xl">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Start Your Mentorship Journey with ElevateHub
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Join ElevateHub today and connect with mentors who can guide you
            towards your goals. Follow our easy steps to start achieving more
            with personalized mentorship.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src={mentor} // Use your preferred image here
              alt="Mentorship Journey"
              className="rounded-lg shadow-lg h-full w-full object-cover"
            />
          </div>
          <div>
            <ul className="space-y-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-teal-500 rounded-full">
                  1
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Create Your Profile
                  </h3>
                  <p className="text-gray-600">
                    Start your ElevateHub journey by creating a personalized
                    profile. Share your goals, interests, and areas for growth
                    to help us match you with the right mentor.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-blue-500 rounded-full">
                  2
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Browse Mentor Profiles
                  </h3>
                  <p className="text-gray-600">
                    Explore a wide variety of mentors from diverse fields. Use
                    filters to find experts with the skills and experience that
                    match your goals.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-green-500 rounded-full">
                  3
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Select Your Ideal Mentor
                  </h3>
                  <p className="text-gray-600">
                    Review mentor profiles, read testimonials, and choose
                    someone who aligns with your personal or professional growth
                    journey.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-orange-500 rounded-full">
                  4
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Schedule Your First Session
                  </h3>
                  <p className="text-gray-600">
                    Find a time that works for you and your mentor. Schedule
                    your first session and kickstart your growth with expert
                    guidance.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 text-center text-lg font-bold text-white bg-yellow-500 rounded-full">
                  5
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Achieve Milestones Together
                  </h3>
                  <p className="text-gray-600">
                    Work closely with your mentor to develop key skills, stay
                    motivated, and hit your personal or professional milestones.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
