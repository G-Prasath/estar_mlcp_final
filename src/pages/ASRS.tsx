import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { AsrsData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { AsrsPageData as metaTags } from "../data/Metatags";

const ASRS = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="ASRS Racking Systems: Optimizing Warehouse Space and Productivity - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -ASRS" />
        <meta property="og:url" content="https://www.estar.in/automated-stoarge-retrival-system" />
        <meta property="og:description" content="ASRS Racking Systems optimizes warehouse space and productivity with advanced customized Automated solutions for storage, and retrieval of raw materials, containers, and car parking." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Product-Page/asrs-1.jpg" />

      </Helmet>
      {AsrsData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} altTag="automated storage and retrieval system" />
        </div>
      ))}
    </>
  );
};

export default ASRS;
