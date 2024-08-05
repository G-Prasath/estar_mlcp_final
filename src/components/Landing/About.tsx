import React from "react";

const About = () => {
  return (
    <div>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-full">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg text-justify">
              E STAR Engineers Private Limited are experts in designing and implementing advanced Multi-Level Parking systems for cars and bikes. We offer cutting-edge solutions including 2 Post and 4 Post Hydraulic Parking, Puzzle Parking, Shuttle Parking, Tower Parking, Multilevel Stacked Rotary Parking, ASRS, and Car Elevators.
              </p>
              <p className="mt-4 text-gray-600 text-lg text-justify"> Our expertise spans design, manufacturing, and commissioning. Committed to innovation and sustainability, we aim to redefine parking solutions, setting global engineering standards. Dedicated to excellence, we continuously adapt to client needs, blending efficiency, sustainability, and quality to deliver enduring value.</p>
            </div>
            <div className="mt-0 md:mt-0">
              <img
                src="/landing-about.avif"
                alt="About Us"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
