import React from "react";
import Banner from "../components/Service/Banner";
import Cards from "../components/Service/Cards";
import { TowerData } from "../data/ServiceData";
import { Helmet } from "react-helmet-async";
import { TowerparkingPageData as metaTags } from "../data/Metatags";

const Towerparking = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Tower Parking Systems: Future of Parking Space Maximization - E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited - Tower Parking System" />
        <meta property="og:url" content="https://www.estar.in/tower-parking-system" />
        <meta property="og:description" content="India's Durable and Safe Tower Parking Systems pioneering the future of urban parking with advanced tower car parking utilizing vertical space for car parking." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Product-Page/Tower-2.jpg" />


      </Helmet>
      {TowerData.map((item, index) => (
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

export default Towerparking;
