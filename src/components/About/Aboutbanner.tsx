import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ReactPlayer from "react-player";

const Aboutbanner = () => {
  return (
    <>
      <div className="bg-[#EDFFFD80] aspect-video bg-center bg-cover">
        <div className="sec-padding gap-20">
          <div className="w-full flex items-center gap-x-[45px] justify-between max-lg:flex-col">
            <div className="w-2/4 p-10 max-md:w-full text-center max-lg:w-full">
              <h2 className="uppercase text-black text-4xl font-bold mb-5 max-lg:text-3xl">
                AMRITSAR SMARTCITY PROJECT
              </h2>
              <p className="text-black my-5 text-justify max-md:px-2">
                Embarking on a transformative journey with the Amritsar
                Government, we introduce a pioneering project for the city's
                advancement: the Amritsar Smart City initiative. At the heart of
                this endeavor lies our innovative Shuttle Stacker Parking
                system, designed to accommodate 350 cars efficiently within
                limited space. By partnering with the government, we aim to
                alleviate parking woes, reduce congestion, and enhance urban
                mobility. This cutting-edge solution not only optimizes land
                usage with trafic free environment which also promotes
                sustainability, aligning with the government's vision for a
                greener, smarter Amritsar. Together, let's build a future where
                convenience, efficiency, and environmental consciousness
                converge for the prosperity of all.
              </p>
            </div>
            <div className="w-2/4 max-md:w-full max-lg:w-full">
            <div className="w-full max-lg:w-full max-lg:aspect-square overflow-hidden justify-evenly max-md:p-10 max-sm:pl-0">
                <iframe
                  src="https://player.vimeo.com/video/994412094?h=7785dad89c"
                  width="640"
                  height="470"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                </div>
            </div>
          </div>

          <div className="w-full flex items-center gap-x-[45px] justify-between max-lg:flex-col max-lg:my-[50px]">
            <div className="w-2/4 max-md:w-full max-lg:w-full max-lg:order-2">
            <div className="w-full max-lg:w-full max-lg:aspect-square overflow-hidden  max-md:p-10 pl-10 max-sm:pl-0">
              <iframe src="https://player.vimeo.com/video/994412071?h=3e12507290" width="640" height="470" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>

            <div className="w-2/4 bg-card p-10 max-md:w-full text-center max-lg:w-full">
              <h3 className="uppercase text-black text-4xl font-bold mb-5 max-lg:text-3xl">
                The chennai silks PROJECT
              </h3>
              <p className="text-black my-5 text-justify max-md:px-2">
                Embarking on a groundbreaking journey with The Chennai Silks, we
                are thrilled to present a visionary project set to transform
                urban parking: The Chennai Silks Tower. At the heart of this
                initiative is our state-of-the-art Shuttle Stacker Parking
                system, expertly designed to accommodate 190 cars within a
                compact space. Partnering with The Chennai Silks, our mission is
                to revolutionize parking infrastructure, reducing congestion and
                enhancing urban mobility. This innovative solution maximizes
                land use, creating a traffic-free environment that supports
                sustainability and reflects the vision of a greener, smarter
                community envisioned by The Chennai Silks. Join us in crafting a
                future where convenience, efficiency, and environmental
                stewardship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutbanner;
