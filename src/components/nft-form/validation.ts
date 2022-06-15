/* eslint-disable no-template-curly-in-string */
import * as yup from "yup";

export const nftFormValidationSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("This is a required field.")
    .nullable(true)
    .min(3, "Name must be at least ${min} characters.")
    .max(64, "Name must be at most ${max} characters."),
  description: yup
    .string()
    .trim()
    .nullable(true)
    .required("This is a required field")
    .min(3, "Description must be at least ${min} characters.")
    .max(64, "Description must be at most ${max} characters."),
  text: yup.string().notRequired().nullable(),
});
