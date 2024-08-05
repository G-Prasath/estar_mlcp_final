import React from "react";
import Videobanner from "../components/Videos/Videobanner";
import Videogrid from "../components/Videos/Videogrid";
import { Helmet } from "react-helmet-async";
import { VideosPageData as metaTags } from "../data/Metatags";

const Videogallery = () => {
  return (
    <div>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="E Star Videos : Multi level Car Parking in chennai -E Star" />
        <meta property="og:site_name" content="E Star Engineers Private Limited -Videos" />
        <meta property="og:url" content="https://www.estar.in/videos" />
        <meta property="og:description" content="Discover our cutting-edge parking solutions in action. See how we maximize space, boost efficiency, and enhance urban mobility" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/video_Banner.webp " />
      </Helmet>
      <Videobanner />
      <Videogrid />
    </div>
  );
};

export default Videogallery;
