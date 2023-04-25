import React, { useContext, useState } from "react";
import { Context } from "../../components/context/Context";
import Swal from "sweetalert2";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Navigate, redirect } from "react-router-dom";
import { Checkout } from "../../components/Checkout";
export interface CartProps {}

const stripePromise = loadStripe(
  "pk_test_51N0T4YB8UaMOXXSs89w7lzi2Au6a9VgItFyJ88c5lo5t5xgWtkYcB6Q0Lfa3w9YjQGbb8BmOWg0KR8LIBznusGGi00MDPRjYKF"
);

const Cart: React.FC<CartProps> = () => {
  const { state, deleteItemOfCart, restItemOfCart, sumItemOfCart } =
    useContext(Context);

  const cart = state.cart;

  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  const envio = 1750;

  const handleDeleteOfCart = (id) => {
    deleteItemOfCart(id);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "error",
      title: "Producto eliminado",
    });
  };

  const handleRest = (id) => {
    restItemOfCart(id);
  };
  const handleSum = (id) => {
    sumItemOfCart(id);
  };

  if (!state.user) {
    return <Navigate to="/signin" />;
  }

  const handleSuccess = () => {
    console.log("Payment successful");
  };

  const handleCheckActive = () => {
    checkActive(true);
  };

  const [check, checkActive] = useState(false);

  if (!check) {
    return (
      <div className="h-screen bg-gray-100 pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">
          Carrito de Compras
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {cart.length ? (
              cart.map((e) => {
                return (
                  <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <div>
                      <button onClick={() => handleDeleteOfCart(e._id)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                    <img
                      src={e.image}
                      alt="product-image"
                      className="w-full rounded-lg sm:w-40"
                    />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900">
                          {e.name}
                        </h2>
                        <p className="mt-1 text-xs text-gray-700">{e.brand}</p>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-16 sm:mt-0 sm:block sm:space-x-4">
                        <div className="flex items-center border-gray-100">
                          <button onClick={() => handleRest(e._id)}>
                            <span className="cursor-pointer rounded-l bg-gray-100 ml-6 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              -{" "}
                            </span>
                          </button>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            value={e.quantity}
                            type="number"
                            min="1"
                          />
                          <button onClick={() => handleSum(e._id)}>
                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                              {" "}
                              +{" "}
                            </span>
                          </button>
                        </div>
                        <div className="flex items-center">
                          <p className="text-base font-semibold py-1">
                            Precio $
                            {e.quantity === 1 ? e.price : e.price * e.quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                <h1 className="mb-10 text-center text-2xl font-bold">
                  No has añadido ningun producto al carrito
                </h1>
              </div>
            )}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${totalPrice}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Envío</p>
              <p className="text-gray-700">${envio}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  ${totalPrice + envio} ARS
                </p>
                <p className="text-sm text-gray-700">Incluye IVA</p>
              </div>
            </div>
            <button
              onClick={() => handleCheckActive()}
              className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            >
              Pagar
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="h-auto py-20 bg-gray-100">
        <Elements stripe={stripePromise}>
          <Checkout
            amount={totalPrice}
            currency="USD"
            onCheckoutSuccess={handleSuccess}
          />
        </Elements>
      </div>
    );
  }
};

export default Cart;
