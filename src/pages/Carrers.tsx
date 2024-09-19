import React, { useState } from "react";
import axios from "axios";
import Banner from "../components/Career/Banner";
import { Helmet } from "react-helmet-async";
import { CareerPageData as metaTags } from "../data/Metatags";
import BtnLoading from "../components/BtnLoading";
import Map from "../components/Map";
// FormDataTypes.ts

export interface FormDataState {
  name: string;
  email: string;
  phone: string;
  profession: string;
  pdf: File | string;
  message: string;
}

const Carrers = () => {
  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    email: "",
    phone: "",
    profession: "",
    pdf: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormDataState>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    if (e.target instanceof HTMLInputElement && e.target.type === "file") {
      const files = e.target.files;
      setFormData({
        ...formData,
        [name]: files ? files[0] : null,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: Partial<FormDataState> = {};

    // Validate form fields
    if (!formData.name.trim()) {
      newErrors.name = "Name required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.profession.trim()) {
      newErrors.profession = "Profession required";
    }

    if (!formData.pdf) {
      newErrors.pdf = "PDF file required";
    } else if (!(formData.pdf instanceof File)) {
      newErrors.pdf = "Invalid PDF file";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const formSendData = new FormData();

      formSendData.append("name", formData.name);
      formSendData.append("email", formData.email);
      formSendData.append("phone", formData.phone);
      formSendData.append("message", formData.message);
      formSendData.append("profession", formData.profession);
      formSendData.append("pdf", formData.pdf);

      try {
        setSubmitting(true);

        const response = await axios.post(
          "https://mlcp-mail.onrender.com/api/career-form",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (response.status === 200) {
          setFormData({
            name: "",
            email: "",
            phone: "",
            profession: "",
            pdf: "",
            message: "",
          });
          
        } else {
          console.error("Failed to send form data");
          alert("Failed to submit form. Please try again.");
        }
      } catch (error) {
        console.error("Error sending form data:", error);
       
      } finally {
        setSubmitting(false);
      }
    }
  };
  

  return (
    <div>
      <Helmet>
         <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <link rel="canonical" href={metaTags.canonical} />

        <meta property="og:title" content="E Star Engineers Private Limited - MLCP" />
        <meta property="og:site_name" content="E Star Engineers Private Limited - careers" />
        <meta property="og:url" content="https://www.estar.in/careers" />
        <meta property="og:description" content="Join our group and shape the future of stopping arrangements. Investigate open doors, develop with us, and apply today to have an effect! " />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.estar.in/banner/career.webp " />
      </Helmet>


      <Banner />

      <h1 className="uppercase text-center font-[700] text-2xl mt-10">
        Let's Grow Together
      </h1>

      <h2 className="text-center">Empower Your Future: Unlock Your Career Potential</h2>

      <div className="flex justify-center items-center mt-10">
        <div className="bg-light_white shadow-md rounded-lg p-8 max-w-4xl w-full">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
                {errors.name && <p className="text-error_clr">{errors.name}</p>}
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-Mail"
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
                {errors.email && (
                  <p className="text-error_clr">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  autoComplete="off"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contact I.D"
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                />
                {errors.phone && (
                  <p className="text-error_clr">{errors.phone}</p>
                )}
              </div>
              <div>
                <select
                  id="profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
                >
                  <option value="">Profession</option>
                  <option value="Engineer">Engineer</option>
                  <option value="Designer">Designer</option>
                  <option value="Manager">Manager</option>
                  <option value="Developer">Developer</option>
                  <option value="Other">Other</option>
                </select>
                {errors.profession && (
                  <p className="text-error_clr">{errors.profession}</p>
                )}
              </div>
            </div>
            <div className="flex items-center bg-white rounded-lg">
              <input
                type="file"
                id="pdf"
                name="pdf"
                autoComplete="off"
                accept="application/pdf"
                className="hidden"
                onChange={handleChange}
              />
              <label
                htmlFor="pdf"
                className="mt-1 block w-full rounded-lg p-3 border-zinc-300 shadow-sm dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none cursor-pointer"
              >
                Upload Your Resume
                <span id="file-name" className="ml-2 text-sm text-gray-500">
                  {formData.pdf ? (formData.pdf instanceof File ? formData.pdf.name : "No file chosen") : ""}
                </span>
              </label>
             
            </div>
             {errors.pdf && (
                <p className="text-error_clr w-full flex justify-start ">Resume is Required</p>
              )}
            <div>
              <textarea
                id="message"
                name="message"
                autoComplete="off"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="mt-1 pl-2 pt-2 block w-full rounded-lg border-zinc-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white focus:outline-none"
              ></textarea>
              {errors.message && (
                <p className="text-error_clr">{errors.message}</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="button relative overflow-hidden h-12 px-8 rounded-full bg-primary text-white border-none cursor-pointer"
                disabled={submitting}
              >
                <span className="button-content relative z-10">
                  {submitting ? <BtnLoading/> : "Submit Request"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <Map/>
    </div>
  );
};

export default Carrers;