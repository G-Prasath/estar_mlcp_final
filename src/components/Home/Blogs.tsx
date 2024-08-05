import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="w-full sec-padding flex items-center flex-col bg-light_white">
      <h4 className="font-bold text-[30px] text-center mb-8 uppercase">Blog</h4>

      <div className="w-full flex max-md:flex-col max-lg:flex-col gap-3">
        <Link to='/blog/amritsar-smartcity-project' className="w-1/2 max-lg:w-full rounded-md relative aspect-square overflow-hidden">
          <LazyLoadImage
            src="blog/1.webp"
            alt="Blog"
            className="w-full aspect-square rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
          />

          <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
            <p className="uppercase font-[700] text-[16px] max-lg:text-[14px]">
              AMRITSAR SMARTCITY PROJECT
            </p>
            <p className="uppercase text-[12px] font-[700]">
              Shuttle Stacker Parking system
            </p>
            <p className="uppercase text-[10px] font-[500]">
              1<sup>st</sup>, June, 2023
            </p>
          </div>
        </Link>

        <div className="w-1/2 max-lg:w-full grid grid-cols-2 gap-3">
          <Link to='/blog/waremat-at-expo-showcasing-innovative-parking-solutions' className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="/blog/Expo.jpeg"
              alt="Blog"
              className="w-full aspect-square rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <p className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px] text-center">
                Chennai Trade Centre
              </p>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                Waremat Expo
              </p>
              <p className="uppercase text-[10px] font-[500]">
                2<sup>nd</sup>, 3<sup>rd</sup>, 4<sup>th</sup> May, 2024
              </p>
            </div>
          </Link>
          <Link to='/blog/how-two-post-hydraulic-systems-can-amplify-your-parking-space' className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="blog/2.jpg"
              alt="Blog"
              className="w-full aspect-square rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <p className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                TN HOUSING BOARD
              </p>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                1+1 2 POST SYSTEM
              </p>
              <p className="uppercase text-[10px] font-[500]">
                28<sup>th</sup> April, 2024
              </p>
            </div>
          </Link>
          <Link to='/blog/revolutionized-tower-parking-boosting-parking-efficiency-and-convenience' className="w-full aspect-square rounded-md relative overflow-hidden">
            <LazyLoadImage
              src="blog/4.jpg"
              alt="Blog"
              className="w-full aspect-square rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <p className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Thrissur cORPORATION
              </p>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                tower parking
              </p>
              <p className="text-[10px] font-[500] text-center">
                19<sup>th</sup> February, 2024
              </p>
            </div>
          </Link>
          <Link to='/blog/puzzle-parking-revolutionizing-urban-car-storage-with-smart-solutions' className="w-full aspect-square rounded-md relative overflow-hidden ">
            <LazyLoadImage
              src="/home/Puzzle_Parking.jpg"
              alt="Blog"
              className="w-full aspect-square rounded-md hover:scale-[1.1] transition ease-in-out duration-500"
            />
            <div className="w-full bg-light_white absolute bottom-3 flex flex-col items-center justify-center opacity-[.9] py-1">
              <p className="uppercase font-[700] text-[16px] max-lg:text-[14px] max-sm:text-[12px]">
                Dev Automobiles
              </p>
              <p className="uppercase text-[12px] font-[700] max-sm:text-[10px] text-center">
                Puzzle Parking
              </p>
              <p className=" text-[10px] font-[500]">
                11<sup>th</sup> May, 2024
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
