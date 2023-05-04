import React, { useContext, useState, useEffect } from "react";
import { User } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Context } from "../context/Context";
import { useLocation, useNavigate } from "react-router-dom";

export interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const navigate = useNavigate();
  const { state, getItems, userOut, getPurchasesHistory } = useContext(Context);
  const [showList, setShowList] = useState(false);

  const cart = state.cart;
  let location = useLocation();

  const actualLocation = location.pathname;
  const id = state.userFilled._id;

  useEffect(() => {
    getPurchasesHistory(id);
  }, []);

  const handleAddItems = () => {
    getItems();
  };

  const handleOutUser = async () => {
    navigate("/signin");
    userOut();
  };

  const handleClick = () => {
    if (state.userFilled._id) {
      navigate("/cart");
    } else {
      Swal.fire({
        icon: "warning",
        title: "Acceso denegado",
        text: "Ingresa con tu cuenta para poder acceder al carrito.",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/signin");
        }
      });
    }
  };
  const checkUser = state.userFilled._id;

  function handleMouseEnter() {
    setShowList(true);
  }

  function handleMouseLeave() {
    setShowList(false);
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const carrito = state.cart;
  const totalPrice = carrito.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);


  return (
    <section className="bg-gray-100 font-sans w-full m-0">
      <div className="flex flex-wrap place-items-center">
        <nav className="flex justify-between bg-gray-900 text-white w-screen h-[50px]">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center italic ">
            <Link to="/"
              className="text-3xl font-bold tracking-widest decoration-double font-serif rounded-sm p-2 hidden md:flex"
            >
              GERTECH
            </Link>
            <ul className="flex px-4 mx-auto font-semibold font-heading space-x-12">
              <li>
                <Link onClick={() => handleAddItems()} to={"/"}>
                  <h2
                    className={
                      actualLocation === "/"
                        ? "focus:outline-none text-indigo-400"
                        : "focus:outline-none text-white"
                    }
                  >
                    Home
                  </h2>
                </Link>
              </li>
              <li>
                <Link to={"/home"}>
                  <h2
                    className={
                      actualLocation === "/home"
                        ? "focus:outline-none text-indigo-400"
                        : "focus:outline-none text-white"
                    }
                  >
                    Productos
                  </h2>
                </Link>
              </li>
              <li>
                <Link to="/gervajacob">
                <h2
                    className={
                      actualLocation === "/gervajacob"
                        ? "focus:outline-none text-indigo-400"
                        : "focus:outline-none text-white"
                    }
                  >
                    Sobre mí
                  </h2>
                </Link>
              </li>
            </ul>
            <div className="flex space-x-5">
              <div>
                <button
                  onClick={() => handleClick()}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <h1
                    className={
                      actualLocation === "/cart"
                        ? "focus:outline-none text-indigo-400"
                        : "focus:outline-none text-white"
                    }
                  >
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

                    {cart.length ? (
                      <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                      </span>
                    ) : null}
                  </h1>
                </button>
                {showList ? (
                  <div className="absolute p-3 top-0 right-0 mt-8 w-80 bg-gray-700 rounded-lg shadow-lg z-10">
                    <h2 className="font-bold mb-4">Carrito</h2>

                    <ul className="relative items-center">
                      {carrito.map((e) => {
                        return (
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">x{e.quantity}</span>
                            <img
                              className="max-h-[90px] max-w-[30px] mr-2"
                              src={e.image}
                            ></img>
                            <span className="text-sm">{e.name}</span>
                            <span>
                              $
                              {e.quantity === 1
                                ? e.price
                                : e.price * e.quantity}
                            </span>
                          </div>
                        );
                      })}
                    </ul>

                    <div className="flex justify-end mt-4">
                      <span className="font-bold mr-2">Total:</span>
                      <span>${totalPrice}</span>
                    </div>
                  </div>
                ) : null}
              </div>
              {!checkUser ? (
                <Link to={id ? `/profile/${id}` : "/signin"}>
                <button className="flex items-center hover:text-gray-200">
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
                </button>
                </Link>
              ) : (
                <div onClick={() => toggleDropdown()}>
                  <button className="flex items-center hover:text-gray-200">
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
                  </button>

                  {isOpen ? (
                    <div
                      id="menu1"
                      className="absolute p-3 top-0 right-0 mt-8 w-80 bg-gray-700 rounded-lg shadow-lg z-10"
                    >
                      <Link to={id ? `/profile/${id}` : "/signin"}>
                        <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                          <p className="text-base leading-4  ">Perfil</p>
                        </button>
                      </Link>
                      <Link to="/miscompras">
                        <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                          <p className="text-base leading-4  ">Mis compras</p>
                        </button>
                      </Link>
                    </div>
                  ) : null}
                </div>
              )}
              <div>
                {checkUser ? (
                  <button
                    onClick={() => handleOutUser()}
                    className="flex items-center hover:text-gray-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 hover:text-gray-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path>
                    </svg>
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
