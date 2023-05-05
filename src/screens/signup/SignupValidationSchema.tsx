import * as yup from "yup";

export const SignupValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  fullName: yup
    .string()
    .min(3, ({ min }) => `Please enter your name`)
    .max(30, ({ max }) => `Please enter your name`)
    .required("Please enter a valid name"),
  passwordConfirmation: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});
