import React, { useEffect, useState } from "react";

const Banner = () => {
  const bannerCnt = [
    {
      img: "/banner/Shuttle-Parking.avif",
      imgWebp: "/banner/Shuttle-Parking.webp",
      imgSizes: "(max-width: 1024px) 100vw, (max-width: 640px) 90vw, 80vw",
      text: "Streamlined Shuttle Parking",
      alt : "Shuttle-Parking",
      title : "Shuttle Parking systems Estar"
    },
    {
      img: "/banner/Tower-Parking.avif",
      imgWebp: "/banner/Tower-Parking.webp",
      imgSizes: "(max-width: 1024px) 100vw, (max-width: 640px) 90vw, 80vw",
      text: "Innovative Tower Parking Solutions",
      alt : "Tower-Parking",
      title : "Shuttle Parking systems Estar"
    },
    {
      img: "/banner/amrisar-project.avif",
      imgWebp: "/banner/amrisar-project.webp",
      imgSizes: "(max-width: 1024px) 100vw, (max-width: 640px) 90vw, 80vw",
      text: "Inhouse Engineered Patented Products",
      alt : "amrisar-shuttle-Parking",
      title : "Amrisar Shuttle Parking systems Estar"
    },
  ];
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
            <picture>
              <source srcSet={`${cnt.img} 1024w, ${cnt.img} 640w, ${cnt.img} 320w`} sizes={cnt.imgSizes} type="image/avif" />
              <source srcSet={`${cnt.imgWebp} 1024w, ${cnt.imgWebp} 640w, ${cnt.imgWebp} 320w`} sizes={cnt.imgSizes} type="image/webp" />
              <img
                src={cnt.img}
                alt={cnt.alt}
                title={cnt.title}
                className={`absolute inset-0 object-cover object-center w-full h-full transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            </picture>
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