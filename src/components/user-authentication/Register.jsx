import { signupValidation } from "./signupValidation";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import React from "react";
import axios from "axios";


const Register = () => {
  const navigate = useNavigate();
  const initial = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    cart:[],
    whishlist:[],
    order:[],
    orderSummary:[]
  };
  const color = {
    backgroundColor: 'white'
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("http://localhost:5001/users", values);
      navigate("/");
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      console.log("axios work finished");
    }
  };

  return (
    <div style={color} className="
 flex h-screen flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
          <img className="logo w-36 md:ml-[-2rem] md:mt-[-1rem]" src="/assets/extra/logo.png" />
        </div>
        <div className="lg:w-[21rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:pt-0">
          <p className="text-left text-3xl font-bold">Sign Up</p>
          <p className="mt-2 text-left text-gray-500">Please enter your details to create an account.</p>

          <Formik initialValues={initial} validationSchema={signupValidation} onSubmit={handleSubmit}>
            {({ errors }) => (
              <Form className="flex flex-col pt-3 md:pt-8">
                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field
                      type="text"
                      name="name"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Name"
                    />
                    {errors.name && <small className="text-red-600">{errors.name}</small>}
                  </div>
                </div>

                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field
                      type="email"
                      name="email"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Email"
                    />
                    {errors.email && <small className="text-red-600">{errors.email}</small>}
                  </div>
                </div>

                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field
                      type="password"
                      name="password"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Password"
                    />
                    {errors.password && <small className="text-red-600">{errors.password}</small>}
                  </div>
                </div>

                <div className="flex flex-col pt-4">
                  <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                    <Field
                      type="password"
                      name="cpassword"
                      className="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                      placeholder="Confirm Password"
                    />
                    {errors.cpassword && <small className="text-red-600">{errors.cpassword}</small>}
                  </div>
                </div>

                <button type="submit" className="w-full rounded-lg bg-gray-900 px-4 py-2 mt-10 text-center text-base font-semibold text-white shadow-md transition">
                  Sign Up
                </button>
              </Form>
            )}
          </Formik>

          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Already have an account?
              <button onClick={() => navigate("/login")} className="underline-offset-4 font-semibold text-gray-900 underline">
                Log in
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none left-[10rem] relative hidden h-screen select-none bg-black md:block md:w-1/2">
        <img className="right -z-1 absolute top-0 h-full w-[80%] object-cover opacity-90" src="/assets/extra/addImage.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default Register;
