import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Projects = () => {
  const options = {
    type: 'loop',
    perPage: 3,
    arrows: false,
    gap: 40,
    autoplay: true,
    interval: 3000, // Time in ms between slide transitions
    speed: 2500,
    pauseOnHover: true, // Pause autoplay on hover
    pagination: true,
    breakpoints: {
      640: {
        prePage: 2,
        gap: 10
      },
    },
  };
  return (
    <>
      <div className="grid w-full md:grid sec-padding bg-light_white">
        <h4 className="text-center font-bold text-[30px] pb-5 max-md:text-[25px]">OUR PROJECTS</h4>

        <Splide options={options} aria-label="My Favorite Images">
          
          <SplideSlide className="relative">
            <LazyLoadImage src="/home/Chromepet.webp" alt="Image 1" className="aspect-square w-full h-full"  />
          </SplideSlide>
          <SplideSlide className="relative">
            <LazyLoadImage src="/home/Thirupur.webp" alt="Image 2" className="aspect-square w-full h-full"  />
          </SplideSlide>
          <SplideSlide className="relative">
            <LazyLoadImage src="/home/Velachery.webp" alt="Image 3" className="aspect-square w-full h-full"  />
          </SplideSlide>


          <SplideSlide className="relative">
            <img src="/home/TRIL.webp" alt="Image 1" className="aspect-square w-full h-full"  />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="/home/Kumbakonam.webp" alt="Image 2" className="aspect-square w-full h-full"   />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="/home/1+1-kasi-theatre.webp" alt="Image 3" className="aspect-square w-full h-full"  />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Projects;