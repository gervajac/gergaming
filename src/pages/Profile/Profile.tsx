import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { UserData } from "../../interfaces/interfaces";
import { Context } from "../../components/context/Context";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export type ProfileProps = {};

const Profile: React.FC<ProfileProps> = () => {
  let { id } = useParams();
  const { state, userData } = useContext(Context);
  const navigate = useNavigate();
  const user = state.userData;

  const [userDatax, setUserDatax] = useState<UserData>({
    email: user ? user.email : "",
    name: user ? user.name : "",
    surname: user ? user.surname : "",
    adress: user ? user.adress : "",
    city: user ? user.city : "",
    country: user ? user.country : "",
    zip: user ? user.zip : "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserDatax({ ...userDatax, [name]: value });
  };

  const handleRegistration = async () => {
    try {
      const response = await axios.put(
        `http://localhost:9000/auth/user/${id}`,
        userDatax
      );
      userData(response.data.id);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Tus datos han sido actualizados",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/cart");
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Hubo algun problema, intenta de nuevo",
      });
    }
  };

  return (
    <div className="flex justify-center flex-row min-h-full bg-gray-700">
        <form action="#" method="POST">

          <div className="shadow overflow-hidden p-10 min-w-[700px]">

            <div className="px-10 py-5 bg-gray-200 font-serif sm:p-6 ">
            <label className="block text-5xl font-medium text-black">
                    Información Personal:
                  </label>
              <div className="flex-col p-4 grid-cols-12 gap-10">
                <div className="col-span-6 sm:col-span-3 p-5 text-bold">
                  <label className="block font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    value={userDatax.name}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="name"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6  sm:col-span-3 p-5">
                  <label className="block font-medium text-gray-700">
                    Apellido
                  </label>
                  <input
                    value={userDatax.surname}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="surname"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-5">
                  <label className="block font-medium text-gray-700">
                    Mail
                  </label>
                  <input
                    value={userDatax.email}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="mail"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 p-5">
                  <label className="block font-medium text-gray-700">
                    País
                  </label>
                  <input
                    value={userDatax.country}
                    onChange={(e) => handleInputChange(e)}
                    name="country"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  ></input>
                </div>

                <div className="col-span-6 p-5">
                  <label className="block  font-medium text-gray-700">
                    Dirección
                  </label>
                  <input
                    value={userDatax.adress}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="adress"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2 p-5">
                  <label className="block  font-medium text-gray-700">
                    Ciudad
                  </label>
                  <input
                    value={userDatax.city}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="city"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2 p-5">
                  <label className="block text-sm font-medium text-gray-700">
                    Codigo Postal
                  </label>
                  <input
                    value={userDatax.zip}
                    onChange={(e) => handleInputChange(e)}
                    type="text"
                    name="zip"
                    className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="button"
                onClick={() => handleRegistration()}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
  );
};

export default Profile;
