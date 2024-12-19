import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  dob: Yup.date().required("Date of birth is required"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
  field1: Yup.string().required("Field 1 is required"),
  field2: Yup.string().required("Field 2 is required"),
  field3: Yup.string().required("Field 3 is required"), 
});

export default validationSchema