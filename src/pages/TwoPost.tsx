import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { TwopostData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { TwopostPageData as metaTags } from "../data/Metatags";

const TwoPost = () => {
  return (
    <>
      <Helmet>
         <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Innovative Two-Post Hydraulic Parking Solutions for Urban Areas - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited - Two Post Hydraulic parking system" />
        <meta property="og:url" content="https://www.estar.in/two-post-hydraulic-system" />
        <meta property="og:description" content="Two Post Hydraulic Parking Solutions Enhances urban areas with advanced hydraulic car parking systems, lifts, and two-post car parking systems." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/2PostBanner.webp" />


      </Helmet>
      {TwopostData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} altTag="two post hydralic system" />
        </div>
      ))}
    </>
  );
};

export default TwoPost;
