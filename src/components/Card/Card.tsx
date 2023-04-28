import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Item } from "../../interfaces/interfaces";
export interface CardProps {}

const Card: React.FC<Item> = ({
  id,
  name,
  category,
  price,
  image,
  brand,
}: Item) => {
  const {addItemToCart, state } = useContext(Context);


  const handleAddToCart = (id) => {
    addItemToCart(id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Producto agregado'
    })
  };

  
  return (
    <div className="flex flex-row pl-1 min-w-[880px] m-2 max-h-[190px] max-w-[500px] rounded  bg-white shadow-md shadow-gray-500">
        <img
          className="hidden md:flex pt-1 rounded-t-lg max-h-[150px] max-w-[350px]"
          src={image}
          alt="product image"
        />
      <div className="flex-col px-6">
        <Link to={`/detail/${id}`}>
          <span className="text-xl italic tracking-tight text-gray-900 dark:text-white">
            {name}
          </span>
          </Link>
        <div className="flex items-center mt-2.5">
        <span className="text text-xl font-sans font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
        </div>
        <div className="flex items-center mt-2.5">

          <button onClick={() => handleAddToCart(id)}>
            <span className="text-white shadow-md shadow-gray-500 bg-purple-800 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-1 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Sumar al Carrito
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
