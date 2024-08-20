import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { ShuttleData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { ShuttlestackerPageData as metaTags } from "../data/Metatags";

const Shuttleparking = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
        
        <meta property="og:title" content="Stacker Parking Systems : Enhancing  Parking Efficiency -E Star" />
        <meta property="og:site_name" content="E star Engineers Private Limited - Stacker Parking System" />
        <meta property="og:url" content="https://www.estar.in/stacker-parking-system" />
        <meta property="og:description" content="Efficient and Space-Saving Stacker Parking Systems enhances urban efficiency with innovative stacked parking solutions for cars." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Product-Page/shuttlestacker-2.jpg" />

      </Helmet>
      
      {ShuttleData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} altTag="stacker parking system" />
        </div>
      ))}
    </div>
  );
};

export default Shuttleparking;
