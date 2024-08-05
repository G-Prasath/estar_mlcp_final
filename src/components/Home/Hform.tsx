import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


import BtnLoading from "../BtnLoading";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { QueryForm } from "../../data/DataPass";
import { validationSchema } from "../../data/Schema";

const Hform = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex w-full max-md:flex-col sec-padding bg-light_white">
      <div className="w-full max-md:order-2">
        <h5 className="text-center font-bold text-[30px] uppercase">
          Contact Us
        </h5>

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
          onSubmit={async (values, {resetForm }) => {            
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
      <div className="w-full max-md:mb-10">
        <LazyLoadImage
          className="rounded-3xl max-lg:mt-20 w-full h-full"
          src="/home/contact.webp"
          alt="Contact"
          effect="blur"
        />
      </div>
    </div>
  );
};

export default Hform