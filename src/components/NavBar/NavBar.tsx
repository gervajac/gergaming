import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import { useLocation } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const {state} = useContext(Context)
  const cart = state.cart
  let location = useLocation();

  const actualLocation = location.pathname
  const id = state.userFilled._id

  return (
    <section className="bg-gray-100 font-sans w-full m-0">
      <div className="flex flex-wrap place-items-center">
        <nav className="flex justify-between bg-gray-900 text-white w-screen">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center italic ">
              <a className="text-3xl font-bold tracking-widest decoration-double font-serif border rounded-sm border-white p-2" href="/welcome">
                GERTECH 
              </a>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li> 
                <Link to={"/welcome"}>
                <h2 className={actualLocation === "/welcome" ? "focus:outline-none text-indigo-400" : "focus:outline-none text-white"}>
                  Home
                </h2>
                </Link>
              </li>
              <li>
                <Link to={"/home"}>
                  <h2 className={actualLocation === "/home" ? "focus:outline-none text-indigo-400" : "focus:outline-none text-white"}>
                    Productos
                  </h2>
                  </Link>
              </li>
              <li>
                <a className="focus:outline-none  focus:text-indigo-400  text-white" href="#">
                  Marcas
                </a>
              </li>
              <li>
                <a className="focus:outline-none  focus:text-indigo-400  text-white" href="#">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="flex space-x-5">
            <Link to={"/cart"}>
              <h1 className={actualLocation === "/cart" ? "focus:outline-none text-indigo-400" : "focus:outline-none text-white"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                
                {cart.length ? <span className="flex absolute -mt-5 ml-4">
                  <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                </span> : null}
              </h1>
              </Link>
              <Link to={id ? `/profile/${id}` : "/signin"}>
              <h2 className="flex items-center hover:text-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-gray-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>
              </Link>
            </div>
          </div>

        </nav>
      </div>
    </section>
  );
};

export default NavBar;
