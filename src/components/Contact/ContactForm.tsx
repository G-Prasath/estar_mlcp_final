import React, { useState } from "react";
import BtnLoading from "../BtnLoading";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { QueryForm } from "../../data/DataPass";
import { validationSchema } from "../../data/Schema";


const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="content sec-padding">
        <h1 className="uppercase text-center font-[700] text-3xl mb-5">
          Get in to Touch
        </h1>

        <p className="text-center mb-5">
          Talk to us about your needs and how we can provide the best solutions.
        </p>

        <div className="contact_form bg-light_white w-full flex items-center justify-center max-lg:flex-col p-5 max-md:py-10 rounded-t-lg">
          <div className="w-3/6 max-lg:w-full">
            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <img
                src="/contact_form_img.jpg"
                alt="footer-photo"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
          <div className="w-3/6 max-lg:w-full">
            <Formik
              initialValues={{
                username: "",
                email: "",
                phone: "",
                message: "",
                city: "",
                select: "",
              }}
              validationSchema={validationSchema}
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
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 p-5 gap-5 max-md:p-0">
                    <div className="mb-5 max-md:mb-1">
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

                    <div className="mb-5 max-md:mb-1">
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

                    <div className="mb-5 max-md:mb-1">
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

                    <div className="mb-5 max-md:mb-1">
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
                  </div>

                  <div className="text-center block mt-5">
                    <button
                      type="submit"
                      className="btn bg-primary text-white rounded-full max-md:rounded-lg w-1/4 p-2"
                      disabled={loading}
                    >
                      {loading ? <BtnLoading/> : "Submit"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="bg-light_white p-5 mt-5 flex max-lg:flex-col max-lg:py-10 rounded-b-lg ">
          <div className="w-1/5 max-lg:w-full max-lg:mb-5">
            <div className="imgs w-[300px] max-lg:w-full rounded-lg">
              <img
                src="/location.jpg"
                alt="laction - img"
                className="w-full rounded-lg "
              />
            </div>
          </div>

          <div className="w-4/5 max-lg:w-full flex justify-center flex-col gap-5">
            <h2 className="font-[700] text-3xl uppercase text-center">
              Our Location
            </h2>
            <div className="flex items-center gap-10 justify-center">
              <div>
                <Link
                  to="https://maps.app.goo.gl/bVVEZU8cU3omtsB38"
                  className="mb-3 text-primary underline md:text-lg text-[16px] text-center flex items-center gap-5"
                >
                  <img src="/map-icon.png" alt="icon" className="w-[50px]" />
                  Taylors 2nd street,Railway Border Rd, Kodambakkam, Chennai,
                  Tamil Nadu - 600 024.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
