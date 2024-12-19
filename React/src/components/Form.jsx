import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // Yup for validation

// Validation schema using Yup
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  dob: Yup.date().required("Date of birth is required"),
  password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
  field1: Yup.string().required("Field 1 is required"),
  field2: Yup.string().required("Field 2 is required"),
});

const Form = () => {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0); // State for Increment/Decrement field
  const [showDropdown, setShowDropdown] = useState(false);
  const [suggestions] = useState([
    "UI design",
    "UI design practice",
    "UI pattern",
    "Daily UI",
  ]);

  const handleSelect = (item) => {
    setSearch(item);
    setShowDropdown(false); // Close dropdown after selection
  };

  const handleDecrement = () => {
    if (value > 0) setValue(value - 1);
  };

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      dob: "",
      password: "",
      field1: "",
      field2: "",
      field3: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <div className="w-full max-w-5xl">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-3 gap-10">
            {/* First Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">DOB</label>
                <input
                  type="date"
                  name="dob"
                  value={formik.values.dob}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.dob && formik.errors.dob && (
                  <div className="text-red-500 text-sm">{formik.errors.dob}</div>
                )}
              </div>
            </div>

            {/* Second Column */}
            <div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="********"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Field 1</label>
                <input
                  type="text"
                  name="field1"
                  value={formik.values.field1}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Placeholder text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.field1 && formik.errors.field1 && (
                  <div className="text-red-500 text-sm">{formik.errors.field1}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Field 2</label>
                <input
                  type="text"
                  name="field2"
                  value={formik.values.field2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Placeholder text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.field2 && formik.errors.field2 && (
                  <div className="text-red-500 text-sm">{formik.errors.field2}</div>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Value</label>
                <div className="flex items-center border bg-white border-gray-300 rounded-lg ">
                  <button
                    type="button"
                    onClick={handleDecrement}
                    className="p-3 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                  >
                    -
                  </button>
                  <div className="flex-grow text-center text-gray-700 font-medium">
                    {value}
                  </div>
                  <button
                    type="button"
                    onClick={handleIncrement}
                    className="p-3 bg-gray-200 hover:bg-gray-300 focus:outline-none"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Third Column */}
            <div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-1">Field 3</label>
                <input
                  type="text"
                  name="field3"
                  value={formik.values.field3}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Placeholder text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {formik.touched.field3 && formik.errors.field3 && (
                  <div className="text-red-500 text-sm">{formik.errors.field3}</div>
                )}
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700 mb-1">Auto Complete</label>
                <input
                  type="text"
                  value={search}
                  readOnly // Input should only reflect the selected option
                  onFocus={() => setShowDropdown(true)} // Show dropdown on focus
                  placeholder="Click to search"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                />
                {showDropdown && (
                  <ul className="absolute bg-white border border-gray-300 w-full mt-1 rounded-lg z-10 max-h-48 overflow-y-auto">
                    {suggestions.map((item, index) => (
                      <li
                        key={index}
                        className="p-2 hover:bg-blue-100 cursor-pointer"
                        onClick={() => handleSelect(item)} // Set selected item
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 font-semibold">
            <button
              type="submit"
              className="px-6 w-full py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
