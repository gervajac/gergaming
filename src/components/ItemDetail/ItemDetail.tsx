import React, { useEffect } from "react";
import { Context } from "../context/Context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import check from "../../assets/check.svg";
import garantia from "../../assets/garantia.svg";
import stock from "../../assets/envio.svg";
export interface ItemDetailProps {}

const ItemDetail: React.FC<ItemDetailProps> = () => {
  const { getItemDetails, state, addItemToCart } = useContext(Context);
  let { id } = useParams();

  useEffect(() => {
    getItemDetails(id);
  }, []);

  const item = state.details;

  const handleAddItemToCart = (id) => {
    console.log(id, "id dedl payload");
    addItemToCart(id);
  };

  console.log(state, "cartttt");

  return (
    <div className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={item.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {item.brand}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {item.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600">
                  {item.category === "ram" ? "MEMORIA RAM" : item.category}
                </span>
              </span>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <span className="flex justify-stretch">
              <img src={garantia}></img>- Garantia
            </span>
            <span className="flex justify-stretch">
              <img src={check}></img>- Envios a todo el pais
            </span>
            <span className="flex justify-stretch">
              <img src={stock}></img>- Stock disponible
            </span>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${item.price} ARS
              </span>
              <button
                onClick={() => handleAddItemToCart(item._id)}
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Agregar al carrito
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
