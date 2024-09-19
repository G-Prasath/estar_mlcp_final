import React, { Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { HomePageData as metaTags } from "../data/Metatags";
import Loading from "../components/Loading";
import Banner from "../components/Home/Banner";
import Map from "../components/Map"; 

const About = React.lazy(() => import("../components/Home/About"));
const Funfact = React.lazy(() => import("../components/Home/Funfact"));
const Services = React.lazy(() => import("../components/Home/Services"));
const Projects = React.lazy(() => import("../components/Home/Projects"));
const Blogs = React.lazy(() => import("../components/Home/Blogs"));
const Hform = React.lazy(() => import("../components/Home/Hform"));
const WhyChooses = React.lazy(() => import("../components/Home/WhyChooses"));
const Testimonial = React.lazy(() => import("../components/Home/Testimonial"));

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="Explore Multi Level Car Parking in India -E Star" />
        <meta property="og:site_name" content="E star Engineers Private Limited" />
        <meta property="og:url" content="https://www.estar.in/" />
        <meta property="og:description" content="We are leading manufacturers of multi-level car parking system in India for optimizing commercial and residential parking efficiency." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/home/Multi-Level-Car-Parking.webp" />

        <link rel="preload" href="/banner/Shuttle-Parking.avif" as="image" type="image/avif" />
        <link rel="preload" href="/banner/Tower-Parking.avif" as="image" type="image/avif" />
        <link rel="preload" href="/banner/amrisar-project.avif" as="image" type="image/avif" />
      </Helmet>
      <Suspense fallback={<Loading />}>
        <Banner />
        <About />
        <Services />
        <WhyChooses />
        <Funfact />
        <Projects />
        <Blogs />
        <Hform />
        <Testimonial />
        <Map/>
      </Suspense>
    </>
  );
};

export default Home;
