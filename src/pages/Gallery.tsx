import React from "react";
import Banner from "../components/Gallery/Banner";
import Compltedproject from "../components/Gallery/Compltedproject";
import Ongoingproject from "../components/Gallery/Ongoingproject";
import { Helmet } from "react-helmet-async";
import { GalleryPageData as metaTags } from "../data/Metatags";

const Gallery = () => {
  return (
    <div>
      <Helmet>
         <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="E Star Gallery : Multi level Car Parking in chennai -E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -Gallery" />
        <meta property="og:url" content="https://www.estar.in/gallery" />
        <meta property="og:description" content="Explore our innovative parking solutions the way how we optimize space, enhance efficiency, and ensure safety across diverse projects. " />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/banner.webp " />
      </Helmet>
      <Banner />
      <Compltedproject />
      {/* <Ongoingproject /> */}
    </div>
  );
};


export default Gallery;
