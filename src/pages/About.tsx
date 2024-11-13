import React from "react";
import Aboutbanner from "../components/About/Aboutbanner";
import Aboutsec from "../components/About/Aboutsec";
import Ourteam from "../components/About/Ourteam";
import Officeimg from "../components/About/Officeimg";
import { Helmet } from "react-helmet-async";
import { AboutPageData as metaTags } from "../data/Metatags";
import Map from "../components/Map";

const About = () => {
  
  return (
    <>

      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Multi level car parking manufactures in india - E Star" />
        <meta property="og:site_name" content="E star Engineers Private Limited - About us" />
        <meta property="og:url" content="https://www.estar.in/about-us" />
        <meta property="og:description" content="We established an exclusive car parking division, redefining convenience and safety with patented tech. We prioritize accessibility, security, and sustainability." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/Aboutus/office_img_1.jpeg" />
      </Helmet>

      <Aboutsec />
      <Aboutbanner />
      <Officeimg />
      <Map/>

    </>
  );
};

export default About;
