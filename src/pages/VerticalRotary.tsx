import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { VerticalData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { VerticalRotataryparkingPageData as metaTags } from "../data/Metatags";

const VerticalRotary = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Vertical Parking System : Maximizing Parking Space with RotaryTechnology -E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -Vertical rotary parking" />
        <meta property="og:url" content="https://www.estar.in/vertical-rotary-parking" />
        <meta property="og:description" content="Vertical Rotary Parking System Maximize urban space with advanced rotary parking technology utilizing vertical parking space to park multiple cars in the space of four parked cars" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Product-Page/Rotary-3.jpg" />

      </Helmet>
      {VerticalData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} />
        </div>
      ))}
    </div>
  );
};

export default VerticalRotary;
