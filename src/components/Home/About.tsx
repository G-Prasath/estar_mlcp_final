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
          title="Multi Level Car Parking Estar"
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
        </h1>
        .
        <p className="text-white my-5 max-lg:my-1 text-justify">
          E Star is a leader in manufacturing multi level car parking systems,
          offering innovative solutions to tackle space constraints in urban
          areas. Our advanced automated systems and multi-level structures are
          designed to optimize parking efficiency across commercial,
          residential, institutional, and industrial projects.
        </p>
        <p className="text-white my-5 max-lg:my-1 text-justify">
          Our Car parking solutions maximize space utilization, reduce land
          costs, and streamline vehicle flow while providing flood protection
          for your car. Whether you require a vertical parking system or a
          multi-level car parking structure, we offer fully customizable designs
          to meet your exact specifications. Each project is built with durable
          materials and innovative technology to ensure long-term performance
          and safety.
        </p>
        <p className="text-white my-5 max-lg:my-1 text-justify">
          By choosing E Star, you invest in eco-friendly, cost-effective
          solutions that enhance parking capacity without compromising quality.
          Our modular systems are scalable and adaptable, built to meet your
          present and future needs.
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
