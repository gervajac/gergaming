import React, {useState} from "react";
import { Context } from "../context/Context";
import { useContext } from "react";


export interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {

const {searchFunction} = useContext(Context)

	const handleSearch = (p) => {
		p.preventDefault();
    const searched = p.target[0].value
    searchFunction(searched)
	}



  return (
    <div>
      <div className="flex px-60 py-2 bg-gray-300 h-auto">
        <form 
		onSubmit={(p) => handleSearch(p)}
		className="bg-gray-800 items-center justify-between w-full flex rounded shadow-lg p-2 sticky">
          <input
            className="font-bold uppercase rounded w-full py-4 pl-2 text-black bg-gray-200 leading-tight focus:outline-none focus:shadow-outline lg:text-sm text-xs"
            type="text"
            placeholder="Buscar Producto"
          />
          <button className="bg-gray-900 p-2 hover:bg-blue-400 cursor-pointer mx-2 rounded">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
