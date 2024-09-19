import React from "react";
import Banner from "../components/Contact/Banner";
import { Helmet } from "react-helmet-async";
import { ContactusPageData as metaTags } from "../data/Metatags";
import Map from "../components/Map";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Helmet>
         <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta
          property="og:title"
          content="E Star Engineers Private Limited - MLCP"
        />
        <meta
          property="og:site_name"
          content="E Star Engineers Private Limited - Contact Us "
        />
        <meta property="og:url" content="https://www.estar.in/contact-us" />
        <meta
          property="og:description"
          content="Reach out to us for inquiries about our advanced Parking Systems and smart parking solutions. "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://www.estar.in/contact_form_img.jpg "
        />
      </Helmet>
      <Banner />
      <ContactForm />
      <Map />
    </>
  );
};

export default Contact;
