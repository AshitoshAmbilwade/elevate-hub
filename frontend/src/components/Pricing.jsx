import React from "react";

const Pricing = () => {
  return (
    <section className="px-10 py-24 text-center bg-green-50">
      <h2 className="mb-10 text-5xl font-extrabold text-green-700">
        Flexible & Affordable Plans
      </h2>
      <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700">
        Choose a plan that fits your growth journey. Elevate Hub offers free
        access for learners, with premium options for advanced mentorship and
        exclusive resources.
      </p>
      <button
        className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-green-500 rounded-full shadow-md hover:bg-green-600 hover:shadow-lg "
        disabled
      >
        View Pricing Plans
      </button>
    </section>
  );
};

export default Pricing;
