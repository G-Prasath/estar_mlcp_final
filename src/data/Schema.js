import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Name is required")
      .min(2, "Name is too short")
      .max(50, "Name is too long")
      .matches(/^[A-Za-z]+$/, "Name must contain only letters"),
    city: Yup.string()
    .required("City is required")
    .min(2, "City Name is too short")
    .max(50, "City Name is too long")
    .matches(/^[A-Za-z]+$/, "Name must contain only letters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message is too short")
      .max(500, "Message is too long"),
    select: Yup.string().required("Please select an option")
  });

  export const landingValSchema = Yup.object().shape({
    username: Yup.string()
    .required("Name is required")
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .matches(/^[A-Za-z]+$/, "Name must contain only letters"),
    city: Yup.string()
    .required("City is required")
    .min(2, "City Name is too short")
    .max(50, "City Name is too long")
    .matches(/^[A-Za-z]+$/, "Name must contain only letters"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must be digits only")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    message: Yup.string()
      .required("Message is required")
      .min(10, "Message is too short")
      .max(500, "Message is too long"),
    select: Yup.string().required("Please select an option"),
    agreeToTerms: Yup.boolean()
    .required("You must accept the privacy policy conditions")
    .oneOf([true], "You must accept the privacy policy conditions"),
  })