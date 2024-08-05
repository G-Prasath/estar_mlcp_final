import React, { useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <div className="sec-padding flex items-center w-full max-lg:flex-col relative">
      <div
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="700"
        className="w-1/2 max-lg:w-full max-lg:order-1 rounded-lg overflow-hidden"
      >
        <LazyLoadImage
          src="/home/Multi-Level-Car-Parking.webp" 
          alt="Multi Level Car Parking"
          className="transition-all duration-300 ease-in-out hover:scale-[1.1] w-full h-full"
        />
      </div>
      <div
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="700"
        className="w-1/2 aspect-video max-lg:w-full bg-primary py-6 px-10 about-right max-lg:px-5 ml-[-5%] max-lg:ml-[0] max-lg:my-3 rounded-lg z-10"
      >
        <h1 className="font-bold text-[25px] text-white text-center">
          Multi Level Car Parking
        </h1>.
        <p className="text-white my-5 max-lg:my-2 text-justify">
          As leaders in the manufacturing of Multi-Level Car Parking (MLCP)
          systems, we hold Indian and International patents in order to leverage
          cutting-edge technology and precision engineering. Our comprehensive
          range includes both dependent and independent systems, reflecting our
          unwavering dedication to quality and innovation.
        </p>
        <p className="text-white my-5 max-lg:my-2 text-justify">
          Our parent organization was laid out in 1995, laying the basis for our
          obligation to greatness. North of twenty years, we have developed to
          address client issues, encouraging getting through organizations
          worldwide.
        </p>

        <p className="text-white my-5 max-lg:my-2 text-justify">
          In 2012, we established our very own exclusive car parking division,
          which emerged to redefine convenience and safety in vehicle parking
          with patented tech-driven solutions. Through our patented technology,
          we prioritize accessibility, security, and sustainability, setting new
          benchmarks in the industry.
        </p>



        <Link
          to="/about-us"
          className="text-white font-bold border rounded-full border-white px-5 py-2 mt-3 inline-block hover:text-primary hover:bg-white"
        >
          Discover more
        </Link>
      </div>
    </div>
  );
};

export default About;
