import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { CarData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { CarparkingPageData as metaTags } from "../data/Metatags";

const Carelevator = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />,
        
        <meta property="og:title" content="Residential and commercial Car Elevators: Convenience and Accessibility - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -car elevator" />
        <meta property="og:url" content="https://www.estar.in/car-elevator" />
        <meta property="og:description" content="India's best suited Private and Commercial Car Lifts for comfort and availability of cars Parking, car lifting." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Product-Page/car-1.jpg " />
      </Helmet>
      {CarData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} altTag="car elevator" />
        </div>
      ))}
    </div>
  );
};

export default Carelevator;
