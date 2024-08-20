import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { PuzzleData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { PuzzleparkingPageData as metaTags } from "../data/Metatags";

const Puzzleparking = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Puzzle Parking Systems: Innovative Solutions for commercial and residential Car Storage - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -Puzzle parking system" />
        <meta property="og:url" content="https://www.estar.in/puzzle-parking-system" />
        <meta property="og:description" content="Puzzle Parking Systems the innovative solutions for urban car storage with automated puzzle car parking systems, and smart parking ensuring space utilization for Commercial and Residential purposes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Product-Page/Puzzle-1.jpg" />

      </Helmet>
      {PuzzleData.map((item, index) => (
        <div key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} altTag="puzzle parking system" />
        </div>
      ))}
    </div>
  );
};

export default Puzzleparking;
