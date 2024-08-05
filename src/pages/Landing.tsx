import React, { useState } from "react";
import BtnLoading from "../components/BtnLoading";
import Services from "../components/Landing/Services";
import Map from "../components/Map";
import About from "../components/Landing/About";
import Whychoose from "../components/Landing/Whychoose";
import { Helmet } from "react-helmet-async";
import { LandingPageData as metaTags } from "../data/Metatags";
import Footer from "../components/Landing/Footer";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { landingValSchema } from "../data/Schema";
import { QueryForm } from "../data/DataPass";


const Landing = () => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />
      </Helmet>

      <div
        className="content sec-padding"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url("/landing-bg.avif")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      >
        <div className="contact_form w-full flex flex-col items-center justify-center max-lg:flex-col p-5 max-sm:p-0 max-md:py-10 rounded-t-lg">
          <div className="w-full inline-flex justify-center max-lg:flex-col p-5 max-sm:p-0 rounded-t-lg">
            <div className="w-3/6 max-lg:w-full text-left">
              <h1 className=" text-white text-xl max-sm:text-[18px] mb-2">
                Welcome to Estar Engineers Private Limited
              </h1>

              <p className="text-4xl max-sm:text-xl mb-3 text-white font-[700] leading-[50px] max-sm:leading-[30px]">
                Discover the future of car parking with E-Star Engineers,
                Innovative Multi Level Car Parking Solutions.
              </p>
              <p className="text-4xl max-sm:text-xl mt-10 max-sm:my-5 text-white font-[700] leading-[50px] max-sm:leading-[30px]">
                We own our Patents for Multi-Level Car Parking Units With Proven
                Success.
              </p>
            </div>

            <div className="w-3/6 max-lg:w-full mb-10 border border-white p-3 rounded-md backdrop-blur">
              <p className="text-white text-justify">
                <span className="text-xl font-bold">
                  E Star Engineers Inquiry Form !
                </span>
                <br /> Welcome to our E Star Engineers Inquiry Form! We're
                thrilled to learn more about your parking needs and how we can
                assist in optimizing your space.
              </p>

              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  phone: "",
                  message: "",
                  city: "",
                  select: "",
                  agreeToTerms: false,
                }}
                validationSchema={landingValSchema}
                onSubmit={async (values, { resetForm }) => {
                  setLoading(true);
                  try {
                    const { data, error } = await QueryForm(values);
                    resetForm();
                  } catch (error) {
                    console.log(error);
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                {({ touched, errors }) => (
                  <Form>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 p-5 md:gap-5 max-md:p-0">

                      <div >
                        <label className="text-white"></label>
                        <Field
                          id="fName"
                          type="text"
                          className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                          placeholder="Name"
                          name="username"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      <div>
                        <label className="text-white"></label>
                        <Field
                          id="Email"
                          type="email"
                          className="w-full h-10 rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                          placeholder="Email"
                          name="email"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      <div>
                        <label className="text-white"></label>
                        <Field
                          id="phNumber"
                          type="text"
                          className="w-full h-10 rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                          placeholder="Contact Number"
                          name="phone"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      <div>
                        <label className="text-white"></label>
                        <Field
                          id="City"
                          type="text"
                          className="w-full rounded-lg p-2 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                          placeholder="City"
                          name="city"
                          autoComplete="off"
                        />
                        <ErrorMessage
                          name="city"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      <div>
                        <label className="text-white"></label>

                        <Field
                          id="Message"
                          name="message"
                          placeholder="Enquire about"
                          as="textarea"
                          rows={1}
                          autoComplete="off"
                          className="w-full h-10 rounded-lg p-3 mt-2 max-md:mt-5 outline-none px-10 min-h-[50px]"
                        ></Field>
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="form-error"
                        />
                      </div>
                      {/* select option */}

                      <div className="my-2 max-md:mt-5">
                        <Field
                          as="select"
                          id="select"
                          name="select"
                          style={{
                            border: "1px solid #e5e7eb",
                            borderRadius: "0.50rem",
                            width: "100%",
                            padding: "12px 2.5rem",
                          }}
                        >
                          <option value="">Select Service*</option>
                          <option value="2 Post Hydraulic System">
                            2 Post Hydraulic System
                          </option>
                          <option value="4 Post Hydraulic System">
                            4 Post Hydraulic System
                          </option>
                          <option value="Puzzle Parking">Puzzle Parking</option>
                          <option value="Shuttle Stacker Parking">
                            Shuttle Stacked Parking
                          </option>
                          <option value="Tower Parking">Tower Parking</option>
                          <option value="Multilevel Stacked Rotary Parking">
                            Multilevel Stacked Rotary Parking
                          </option>
                          <option value="Bike Parking">Bike Parking</option>
                          <option value="Automated Storage And Retrieval System">
                            Automated Storage And Retrieval System
                          </option>
                          <option value="Elevated Car Lift">Car Lift</option>
                        </Field>
                        <ErrorMessage
                          name="select"
                          component="div"
                          className="form-error"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="text-white">
                          <Field name="agreeToTerms" type="checkbox" /><span className="ml-3">I have read and agreed
                          to the privacy policy. </span>
                        </label>
                        <ErrorMessage name="agreeToTerms" component="div" className="form-error" />
                      </div>
                    </div>

                    <div className="text-center block mt-5">
                      <button
                        type="submit"
                        className="btn bg-primary text-white rounded-full max-md:rounded-lg w-1/4 p-2"
                        disabled={loading}
                      >
                        {loading ? <BtnLoading /> : "Submit"}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>

      <About />

      <Services />

      <Whychoose />

      <Map />

      <Footer />
    </>
  );
};

export default Landing;
