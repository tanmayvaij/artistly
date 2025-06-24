import * as Yup from "yup";

export const artistOnboardFormValidator = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  bio: Yup.string().min(10, "Bio must be at least 10 characters").required(),
  categories: Yup.array().min(1, "Select at least one category"),
  languages: Yup.array().min(1, "Select at least one language"),
  feeRange: Yup.string().required("Fee range is required"),
  location: Yup.string().required("Location is required"),
  image: Yup.mixed().nullable(),
});
