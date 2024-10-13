import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { loginValidation } from "./loginValidation";
import axios from "axios";
import './login.css';
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const Login = () => {
  const color={
    backgroundColor:'white'
  }
  const navigate = useNavigate();
  const initial = {
    email: "",
    password: "",
  };
  const handleSubmit = async (values) => {
    try {
      const response = await axios.get("http://localhost:5001/users");
      const users = response.data;
      console.log(users);
      const user = users.find(u => u.email === values.email && u.password === values.password);
      if(user.role=="admin"){
        
        navigate("/admin");
        window.location.reload()

      }
      else if (user) {
        localStorage.setItem("user", JSON.stringify(user)); 
        navigate("/");
        window.location.reload()
        
      } else {
        alert("Invalid email or password");
      }
    } catch (error) {
      console.log("Error fetching", error);
    } finally {
      console.log("Axios working completed");
    }
  };

  return (
    
   <div style={color} className=" 
 flex h-screen flex-wrap">
      <div className="flex w-full flex-col md:w-1/2">
        <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
        <img className="logo" src="/assets/extra/logo.png"/> 
        </div>
        <div className="lg:w-[21rem] mx-auto my-auto flex flex-col justify-center pl- pt-8 md:justify-start  md:pt-0">
          <p className="text-left text-3xl font-bold">You’re back </p>
          <p className="mt-2 text-left text-gray-500"> Yay, please enter your details.</p>

          <Formik initialValues={initial} validationSchema={loginValidation} onSubmit={handleSubmit}>
            {({ errors }) => (
              <Form className="flex flex-col pt-3 md:pt-8">
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
                <div className="mb-12 flex flex-col pt-4">
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
                <div className="flex justify-between">
                  <label className="block text-gray-500 font-bold my-4">
                    <Field type="checkbox" className="leading-loose text-pink-600" />
                    <span className="py-2 text-sm text-gray-600 leading-snug"> Remember Me </span>
                  </label>
                  <label className="\">
                    <a href="#" className="cursor-pointer tracking-tighter text-black border-b-2 border-gray-200 hover:border-gray-400">
                      <span>Forgot Password?</span>
                    </a>
                  </label>
                </div>
                <button 
                  type="submit" 
                  className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md   transition"
                >
                  Log in
                </button>
              </Form>
            )}
          </Formik>

          <div className="py-12 text-center">
            <p className="whitespace-nowrap text-gray-600">
              Don't have an account?
              <button 
                onClick={() => navigate("/register")}
                className="underline-offset-4 font-semibold text-gray-900 underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      </div>
      <div className="pointer-events-none left-[10rem]  relative hidden h-screen select-none bg-black md:block md:w-1/2">
       
        <img className="right  -z-1 absolute top-0 h-full w-[80%] object-cover opacity-90" src="/assets/extra/addImage.jpg" alt="Background" />
      </div>
    </div>
  );
};

export default Login;
