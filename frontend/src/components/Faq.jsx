import React from "react";

const Faq = () => {
  return (
    <section className="px-8 py-20 text-center bg-green-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-6 text-5xl font-extrabold text-green-600">
          Unlock Your Potential with the Right Mentor!
        </h2>
        <p className="mb-10 text-lg text-gray-700 leading-relaxed">
          Connect with experienced mentors who can guide you towards your goals.
          Whether you're starting a new career, learning new skills, or growing
          your network—your journey begins here.
        </p>
        <div className="flex justify-center gap-6">
          <button
            className="px-8 py-4 text-lg font-semibold text-white transition rounded-lg shadow-md bg-green-500 hover:bg-green-600 hover:scale-105 hover:shadow-xl"
            disabled
          >
            Get Started
          </button>
          <button
            className="px-8 py-4 text-lg font-semibold text-green-600 transition bg-white border-2 border-green-500 rounded-lg hover:bg-green-500 hover:text-white hover:shadow-md"
            disabled
          >
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
