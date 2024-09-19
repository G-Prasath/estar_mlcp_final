import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Aboutsec = () => {
  return (
    <div className="w-full sec-padding flex items-center justify-evenly gap-x-20 max-lg:flex-col">
      <div className="w-2/4 max-md:w-full text-center max-lg:w-full">
        <h1 className="uppercase text-4xl font-bold mb-5 max-lg:text-3xl">
          About Us
        </h1>
        <p className="text-text_color my-5 text-justify max-md:px-2">
          E STAR Engineers Private Limited, born from the evolution of MECH CI
          CADD Group in 1995, pioneers in design, manufacturing, and
          commissioning of Automatic Multi-Level Car Parking/Bike Parking
          systems. As an engineering-based company with vast experience in
          engineering design and consultancy services, we specialize in various
          cutting-edge Car Parking Systems, including 2 Post Hydraulic Parking,
          4 Post Hydraulic Parking, Puzzle Parking, Shuttle Parking, Tower
          Parking, Multilevel Stacked Rotary Parking, ASRS, and Car Elevator.
        </p>
        <p className="text-text_color my-5 text-justify max-md:px-2">
          Our parent organization was laid out in 1995, laying the basis for our
          obligation to greatness. North of twenty years, we have developed to
          address client issues, encouraging getting through organizations
          worldwide.
        </p>
        <p className="text-text_color my-5 text-justify max-md:px-2">
          In 2012, we established our very own exclusive car parking division,
          which emerged to redefine convenience and safety in vehicle parking
          with patented tech-driven solutions. Through our patented technology,
          we prioritize accessibility, security, and sustainability, setting new
          benchmarks in the industry.
        </p>
      </div>

      <div className="w-2/4 rounded-lg max-lg:w-full ">
        <div className="w-full h-[505px] max-lg:w-full max-lg:h-[350px] overflow-hidden rounded-lg">
          <LazyLoadImage
            src="Aboutus/About-Image.jpg"
            alt="about"
            className="w-full h-full aspect-square rounded-lg hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutsec;
