import React from "react";
import { User } from "../../interfaces/interfaces";
import { useState, useContext } from "react";
import { Context } from "../../components/context/Context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export type SignInProps = {};

const SignIn: React.FC<SignInProps> = () => {
  const { verifyUser, state, fillUser, userData } = useContext(Context);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<User>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async () => {

    try {
      const response = await axios.post(
        "http://localhost:9000/auth/login",
        formData
      );
      fillUser(response);
      verifyUser(response);
      userData(response.data.user._id)
      navigate("/home")
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-white rounded-t-lg p-8">
          <p className="text-center text-sm text-gray-400 font-light">
            Sign in with
          </p>
        </div>
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Or sign in with credentials
          </p>
          <form className="mt-6">
            <div className="relative">
              <label>
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="E-mail"
                />
              </label>
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
            </div>
            <div className="relative mt-3">
              <label>
                <input
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(e) => handleInputChange(e)}
                  placeholder="Contraseña"
                />
              </label>
              <div className="absolute left-0 inset-y-0 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 ml-3 text-gray-400 p-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4 flex items-center text-gray-500">
              <label>
                Not register?{" "}
                <Link to="/login">
                  {" "}
                  <span className="text-blue-700">Click here</span>
                </Link>
              </label>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button
                type="button"
                onClick={() => handleRegistration()}
                className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
