import React, { useEffect } from "react";
import { useState } from "react";
import { RegistrationForm } from "../../interfaces/interfaces";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, Navigate, useNavigate } from "react-router-dom";

interface LogInFormProps {}

const LogIn: React.FC<LogInFormProps> = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistrationForm>({
    email: "",
    password: "",
    name: "",
    surname: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/auth/register",
        formData
      );
      console.log(response.data); // do something with server response
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Has creado tu cuenta exitosamente",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Mail ya utilizado anteriormente",
      });
    }
  };

  //   const handleRegistration = async () => {
  //     try {
  //       const response = await axios.post('/api/register', onSubmit);
  //       console.log(response.data); // do something with server response
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  useEffect(() => {

  }, [setFormData]);
  return (
    <form className="mt-6">
      <div className="p-8 lg:w-1/2 mx-auto">
        <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
          <p className="text-center text-sm text-gray-500 font-light">
            Crear cuenta de Usuario
          </p>
          <div className="relative">
            <label>
              <input
                className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange(e)}
                placeholder="Nombre"
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
                type="text"
                name="surname"
                value={formData.surname}
                onChange={(e) => handleInputChange(e)}
                placeholder="Apellido"
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
          <div className="relative mt-3">
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
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
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
          <div className="flex items-center justify-center mt-8">
            <button
              type="button"
              onClick={() => handleRegistration()}
              className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Crear Usuario
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;
