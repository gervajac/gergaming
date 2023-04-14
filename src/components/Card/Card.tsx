import React from "react";
import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";
import { Item } from "../../interfaces/interfaces";
export interface CardProps {}

const Card: React.FC<Item> = ({id, name, category, price, image, brand}: Item ) => {
  return (
    <div className="flex flex-col justify-between max-w-[250px] m-4 h-[400px] max-w-screen border-gray-900 border-solid rounded border bg-white shadow">
      <a href="#">
        <img
          className="pt-1 rounded-t-lg max-h-[180px] w-[300px]"
          src={image}
          alt="product image"
        />
      </a>
      <div className="px-5 pb-5">
        <a href={`/detail/${id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
