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
            <LazyLoadImage src="/home/tower-parking.webp" alt="tower-parking" title="Tower Parking" className="aspect-square w-full h-full"  />
          </SplideSlide>
          <SplideSlide className="relative">
            <LazyLoadImage src="/home/shuttle-parking.webp" alt="shuttle-parking" title="Shuttle Parking" className="aspect-square w-full h-full"  />
          </SplideSlide>
          <SplideSlide className="relative">
            <LazyLoadImage src="/home/puzzle-parking.webp" alt="puzzle-parking" title="Puzzle Parking" className="aspect-square w-full h-full"  />
          </SplideSlide>


          <SplideSlide className="relative">
            <img src="/home/1+1-Hydralic.webp" alt="1+1-Hydralic" title="1+1 Hydralic" className="aspect-square w-full h-full"  />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="/home/4-post-hydralic.webp" alt="4-post-hydralic" title="4-post-hydralic" className="aspect-square w-full h-full"   />
          </SplideSlide>
          <SplideSlide className="relative">
            <img src="/home/1+1-2post.webp" alt="1+1-2post" title="1+1-2post" className="aspect-square w-full h-full"  />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default Projects;