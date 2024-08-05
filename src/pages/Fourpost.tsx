import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { FourpostData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { FourpostPageData as metaTags } from "../data/Metatags";

const Fourpost = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Upgrade Your Parking Efficiency with Four-Post Hydraulic Systems - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited - Four Post Hydraulic parking system" />
        <meta property="og:url" content="https://www.estar.in/four-post-hydraulic-system" />
        <meta property="og:description" content="India's Best and Reliable four-post hydraulic parking systems near you, featuring advanced hydraulic car parking for Hatchbacks, Sedans, SUVs parking systems." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/4PostBanner.webp" />

      </Helmet>
      {FourpostData.map((item, index) => (
        <React.Fragment key={index}>
          <Banner
            imgSrc={item.banner}
            mainTitle={item.title}
            cnt1={item.cnt1}
            cnt2={item.cnt2}
          />
          <Cards card1={item.card_1} card2={item.card_2} card3={item.card_3} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Fourpost;
