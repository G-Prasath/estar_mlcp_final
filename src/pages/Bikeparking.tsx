import React from "react";
import Banner from "../components/Service/Banner";
import { BikeData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { BikeparkingPageData as metaTags } from "../data/Metatags";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Bikeparking = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Secure and Sustainable Bike Parking Racks - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -Bike parking" />
        <meta property="og:url" content="https://www.estar.in/bike-parking" />
        <meta property="og:description" content="Secure and Economical Bike parking Racks for urban comfort with inventive stopping frameworks maximizing bike parking  by making optimized vertical space" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/Bike-Banner.webp" />

      </Helmet>
      {BikeData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <div className="sec-padding">

            {/* ----------- Card 1 -----------  */}
            <div className="w-full card-1 flex items-center justify-between max-lg:flex-col max-lg:my-10">
              <div className="card-img w-2/5 h-[500px] rounded-lg flex items-center justify-center max-[1200px]:h-[400px] max-lg:w-full max-lg:h-auto max-sm:aspect-square">
                <LazyLoadImage
                  src={item.card_1.img}
                  alt="Bike Parking System"
                  title="Bike Parking System"
                  className="rounded-lg w-full z-10 h-full"
                />
              </div>

              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className="card-cnt w-3/5 bg-light_white flex flex-col items-center max-lg:w-[90%] max-sm:w-full px-5"
              >
                <div className="flex items-center justify-center gap-5 my-6 max-sm:flex-col max-sm:my-5 max-sm:gap-2">
                  <h2 className="text-center text-3xl font-[700] uppercase max-sm:text-2xl">
                    {item.card_1.title}
                  </h2>
                </div>

                <ul className="mb-5">
                  {Object.keys(item.card_1.para).map((items, index) =>
                    index < 3 ? (
                      <>
                        <li className="mb-3 md:flex" key={index}>
                          <h3 className="font-[700]">{items} :</h3>
                          <span className="text-[16px] font-normal">
                            {item.card_1.para[items]}
                          </span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="mb-3" key={index}>
                          <p>
                            <span className={`font-[700]`}>{items}</span> :
                            {item.card_1.para[items]}
                          </p>
                        </li>
                      </>
                    )
                  )}
                </ul>
              </div>

              <div
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                className="card-bar h-[400px] w-10 bg-gray rounded-full max-lg:h-10 max-lg:w-full max-sm:rounded-t-lg"
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bikeparking;
