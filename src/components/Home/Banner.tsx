import React, { useEffect, useState } from "react";
import { bannerCnt } from "../../data/HomeData";

const Banner = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerCnt.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bannerCnt.length]);

  return (
    <div className="relative overflow-hidden w-full aspect-video">
      {bannerCnt.map((cnt, index) => (
        <div key={index}>
          <div className="absolute inset-0">
           
              <img
                src={cnt.img}
                alt={cnt.alt}
                title={cnt.title}
                className={`absolute inset-0 object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>

          <div className="relative text-primary z-10 flex flex-col justify-center items-center h-full text-center">
            <p className={`absolute card-glass text-center mt-[50%] text-5xl font-bold leading-tight mb-4 max-sm:text-lg max-sm:mb-1 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}>
              {cnt.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;